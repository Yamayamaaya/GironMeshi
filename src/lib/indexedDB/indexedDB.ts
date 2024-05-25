export const openDatabase = (storeName?: string) => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    // 最初にデータベースを開く際にはバージョンを指定しない
    const request = window.indexedDB.open('MyAppDatabase')

    request.onerror = (event) => {
      const errorDetail = (event.target as IDBOpenDBRequest).error
        ? (event.target as IDBOpenDBRequest).error?.message
        : '不明なエラー'
      reject(
        new Error(`データベースを開けませんでした。エラー詳細: ${errorDetail}`)
      )
    }

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      if (storeName && !db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id' })
      }
    }

    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      if (storeName && !db.objectStoreNames.contains(storeName)) {
        db.close()
        // ストアが存在しない場合は、バージョンをインクリメントして再オープン
        const reopenRequest = window.indexedDB.open(
          'MyAppDatabase',
          db.version + 1
        )
        reopenRequest.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result
          db.createObjectStore(storeName, { keyPath: 'id' })
        }
        reopenRequest.onsuccess = (event) => {
          resolve((event.target as IDBOpenDBRequest).result)
        }
        reopenRequest.onerror = () => {
          reject(new Error('データベースの再オープンに失敗しました。'))
        }
      } else {
        resolve(db)
      }
    }
  })
}

export const saveData = async (storeName: string, key: string, data: any) => {
  let db = await openDatabase(storeName)
  const transaction = db.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  return new Promise((resolve, reject) => {
    const request = store.put({ id: key, value: data })
    request.onsuccess = () => resolve('データが正常に保存されました。')
    request.onerror = () => reject('データの保存に失敗しました。')
  })
}

export const loadData = async (storeName: string, key: string) => {
  const db = await openDatabase(storeName)
  const transaction = db.transaction([storeName], 'readonly')
  const store = transaction.objectStore(storeName)
  return new Promise((resolve, reject) => {
    const request = store.get(key)
    request.onsuccess = () => {
      if (request.result) {
        const formattedResult = {
          id: request.result.id,
          ...request.result.value,
        }
        resolve(formattedResult)
      } else {
        reject('データが見つかりません。')
      }
    }
    request.onerror = () => {
      reject('データの読み込みに失敗しました。')
    }
  })
}

export const updateData = async (
  storeName: string,
  key: string,
  newData: any
) => {
  const db = await openDatabase(storeName)
  const transaction = db.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  return new Promise((resolve, reject) => {
    const request = store.get(key)
    request.onsuccess = () => {
      if (request.result) {
        const updateRequest = store.put({ ...request.result, value: newData })
        updateRequest.onsuccess = () =>
          resolve('データが正常に更新されました。')
        updateRequest.onerror = () => reject('データの更新に失敗しました。')
      } else {
        reject('更新するデータが見つかりません。')
      }
    }
    request.onerror = () => {
      reject('データの読み込みに失敗しました。')
    }
  })
}

export const loadAllData = async (storeName: string) => {
  const db = await openDatabase(storeName)
  if (!db.objectStoreNames.contains(storeName)) {
    return null // ストアが存在しない場合はnullを返す
  }
  const transaction = db.transaction([storeName], 'readonly')
  const store = transaction.objectStore(storeName)
  return new Promise((resolve, reject) => {
    const request = store.getAll()
    request.onsuccess = () => {
      const formattedResult = request.result.map((item) => ({
        id: item.id,
        ...item.value,
      }))
      resolve(formattedResult)
    }
    request.onerror = () => {
      reject('データの一括読み込みに失敗しました。')
    }
  })
}

export const addData = async (storeName: string, id: string, data: any) => {
  let db = await openDatabase(storeName)
  if (!db.objectStoreNames.contains(storeName)) {
    throw new Error(`ストア ${storeName} が存在しません。`)
  }

  const transaction = db.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  return new Promise((resolve, reject) => {
    const dataWithId = { id: id, value: data } // idをデータに追加
    const request = store.add(dataWithId)
    request.onsuccess = () => resolve('データが正常に追加されました。')
    request.onerror = () => reject(new Error('データの追加に失敗しました。'))
  })
}

export const deleteData = async (storeName: string, id: string) => {
  const db = await openDatabase(storeName)
  const transaction = db.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  return new Promise((resolve, reject) => {
    const request = store.delete(id)
    request.onsuccess = () => resolve('データが正常に削除されました。')
    request.onerror = () => reject(new Error('データの削除に失敗しました。'))
  })
}
