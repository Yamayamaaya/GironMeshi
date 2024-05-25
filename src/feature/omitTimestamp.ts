import type { Timestamp } from 'firebase/firestore'

export const omitTimestamp = (
  timestamp: string | Timestamp,
  isJp?: boolean
) => {
  // HACK: Timestamp型の引数を受け取ってるはずなのになぜかstring型で判定される。
  // 月、日、時、分のみを返す
  if (!timestamp) return null
  const date =
    typeof timestamp === 'string' ? new Date(timestamp) : timestamp.toDate()

  const month = date.getMonth() + 1
  const day = date.getDate()
  // 時間と分が一桁の場合、先頭に0を追加して二桁にする
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return isJp
    ? `${month}月${day}日 ${hours}時${minutes}分`
    : `${month}/${day} ${hours}:${minutes}`
}
