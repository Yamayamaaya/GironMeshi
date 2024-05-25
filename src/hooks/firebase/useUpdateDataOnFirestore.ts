import { getFirestore, doc, updateDoc } from 'firebase/firestore'
import { useCallback } from 'react'

export const useUpdateDataOnFirestore = () => {
  const updateDataOnFirestore = useCallback(
    async (
      collectionName: string,
      id: string,
      property: string,
      value: any
    ) => {
      const db = getFirestore()
      const docRef = doc(db, collectionName, id)
      await updateDoc(docRef, {
        [property]: value,
        updatedTime: new Date(),
      })
    },
    []
  )

  return updateDataOnFirestore
}
