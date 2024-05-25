import { getFirestore, collection, addDoc } from 'firebase/firestore'

export const bulkAdd = async (collectionName: string, documents: any[]) => {
  const db = getFirestore()

  for (const docData of documents) {
    await addDoc(collection(db, collectionName), docData)
  }
}
