const functions = require('firebase-functions')
const admin = require('firebase-admin')
const axios = require('axios')
admin.initializeApp()

exports.createFirebaseAuthCustomToken = functions.https.onCall(
  async (callableRequest) => {
    const accessToken = callableRequest.accessToken
    await verifyAccessToken(accessToken)
    const { lineUserId, name, imageUrl } = await getLINEProfile(accessToken)
    await setAppUserDocument({ lineUserId, name, imageUrl })
    const customToken = await admin.auth().createCustomToken(lineUserId)

    return { customToken }
  }
)

const verifyAccessToken = async (accessToken) => {
  const response = await axios.get(
    `https://api.line.me/oauth2/v2.1/verify?access_token=${accessToken}`
  )
  if (response.status !== 200) {
    throw new Error(`[${response.status}]: GET /oauth2/v2.1/verify`)
  }

  const channelId = response.data.client_id
  if (channelId !== functions.config().line.channel_id) {
    console.log('channelId', channelId)
    console.log(
      'functions.config().line.channel_id',
      functions.config().line.channel_id
    )
    throw new Error(`LINE Login チャネル ID が正しくありません。`)
  }

  const expiresIn = response.data.expires_in
  if (expiresIn <= 0) {
    console.log('expiresIn', expiresIn)
    throw new Error(`アクセストークンの有効期限が過ぎています。`)
  }
}

const getLINEProfile = async (accessToken) => {
  const response = await axios.get(`https://api.line.me/v2/profile`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  if (response.status !== 200) {
    throw new Error(`[${response.status}]: GET /v2/profile`)
  }
  return {
    lineUserId: response.data.userId,
    name: response.data.displayName,
    imageUrl: response.data.pictureUrl,
  }
}

const setAppUserDocument = async ({ lineUserId, name, imageUrl }) => {
  await admin
    .firestore()
    .collection(`users`)
    .doc(lineUserId)
    .set({
      name: name,
      imageUrl: imageUrl ?? null,
      createdTime: new Date(),
      updatedTime: new Date(),
    })
}

const runtimeOpts = {
  timeoutSeconds: 300,
  memory: '256MB',
}

exports.everyTwentyMinutes = functions
  .region('asia-northeast1')
  .runWith(runtimeOpts)
  .pubsub.schedule('*/20 * * * *')
  .timeZone('Asia/Tokyo')
  .onRun(async (context) => {
    const targetEvents = await getTargetEvents()
    if (!targetEvents) {
      return null
    }

    console.log('抽選対象のイベント(絞り込み前):', targetEvents)

    const pendingTargetEvents = targetEvents.filter(
      (event) => event.LotteryStatus !== 'done'
    )

    console.log('抽選対象のイベント（絞り込み後）:', pendingTargetEvents)

    const lotteryPromises = pendingTargetEvents.map(async (event) => {
      try {
        const entries = await getEntries(event.id)
        if (!entries) {
          return null
        }

        await drawLottery(entries, event.capacity)

        await admin.firestore().collection('events').doc(event.id).update({
          LotteryStatus: 'done',
          updatedTime: new Date(),
        })
      } catch (error) {
        console.error(
          `イベントID ${event.id} の処理中にエラーが発生しました:`,
          error
        )
        // 必要に応じて、エラー発生時の処理をここに追加
      }
    })

    const results = await Promise.allSettled(lotteryPromises)
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(
          `イベントID ${pendingTargetEvents[index].id} の処理が成功しました。`
        )
      } else if (result.status === 'rejected') {
        console.error(
          `イベントID ${pendingTargetEvents[index].id} の処理中にエラーが発生しました:`,
          result.reason
        )
      }
    })
  })

const getTargetEvents = async () => {
  try {
    const now = new Date()
    console.log('現在時刻:', now)
    const eventsRef = admin.firestore().collection('events')
    const querySnapshot = await eventsRef.get() // 全イベントを取得

    querySnapshot.docs.forEach((doc) => {
      const data = doc.data()
      const eventDate = data.eventDate.toDate() // Firestore TimestampをDateに変換
      const deadlineDate = data.deadlineDate.toDate()
      const capacity = data.capacity
      const restrictType = data.restrictType

      // 条件をチェック
      const isFutureEvent = eventDate > now
      const isDeadlinePassed = deadlineDate < now
      const hasCapacity = capacity > 0
      const isLottery = restrictType === 'lottery'

      console.log(
        `イベントID: ${doc.id}, eventDateが未来: ${isFutureEvent}, deadlineDateが過去: ${isDeadlinePassed}, capacityが存在: ${hasCapacity}, restrictTypeがlottery: ${isLottery}`
      )
    })

    // 条件に一致するイベントのみをフィルタリング
    // idも含めて返す
    const filteredEvents = querySnapshot.docs
      .filter((doc) => {
        const data = doc.data()
        const eventDate = data.eventDate.toDate()
        const deadlineDate = data.deadlineDate.toDate()
        return (
          eventDate > now &&
          deadlineDate < now &&
          data.capacity > 0 &&
          data.restrictType === 'lottery'
        )
      })
      .map((doc) => {
        return { ...doc.data(), id: doc.id }
      })

    console.log('getTargetEventsで取得したイベント:', filteredEvents)

    if (filteredEvents.length === 0) {
      console.log('該当するイベントはありません。')
      return null
    }

    return filteredEvents
  } catch (error) {
    console.error('getTargetEventsでエラーが発生しました:', error)
    return null
  }
}

const getEntries = async (eventId) => {
  try {
    const entriesRef = admin.firestore().collection('entries')
    console.log('eventId:', eventId)
    const querySnapshot = await entriesRef.where('eventId', '==', eventId).get()
    const validEntries = querySnapshot.docs.filter(
      (doc) => doc.data().isCanceled === false
    )
    if (validEntries.empty) {
      console.log('該当するエントリーはありません。')
      return null
    }

    return validEntries.docs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
  } catch (error) {
    console.error(`getEntriesでエラーが発生しました: ${error}`)
    return null
  }
}

const drawLottery = async (entries, capacity) => {
  let winners = []
  try {
    if (entries.length <= capacity) {
      console.log('応募数が抽選人数以下です。全員当選です。')
      winners = entries.map((entry) => entry.id)
    } else {
      const shuffledEntryIds = shuffle(entries.map((entry) => entry.id))
      winners = shuffledEntryIds.slice(0, capacity)
    }

    console.log('当選者:', winners)

    const winnersUpdatePromises = winners.map((winnerId) => {
      return admin.firestore().collection('entries').doc(winnerId).update({
        isWinner: true,
        updatedTime: new Date(),
      })
    })

    await Promise.all(winnersUpdatePromises)
  } catch (error) {
    console.error(`drawLotteryでエラーが発生しました: ${error}`)
  }
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
