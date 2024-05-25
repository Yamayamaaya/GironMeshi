import { useState, useEffect } from 'react'
import type { Category } from '@src/types/category'
import { getFirestore, doc, collection } from '@firebase/firestore'
import { onSnapshot, query, where } from 'firebase/firestore'

export const useCategoryById = (id?: string) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }
    const db = getFirestore()
    const categoryDocRef = doc(db, 'categories', id)

    const unsubscribe = onSnapshot(
      categoryDocRef,
      (doc) => {
        if (doc.exists()) {
          setCategory({
            ...doc.data(),
            id: doc.id,
          } as Category)
        } else {
          setCategory(null)
        }
        setLoading(false)
      },
      (error) => {
        setError(error)
        setLoading(false)
      }
    )

    return () => unsubscribe() // Clean up the subscription on unmount
  }, [id])

  return { category, loading, error }
}

export const useCategoriesByUserId = (userId?: string) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!userId) {
      setLoading(false)
      return
    }
    const db = getFirestore()
    const categoriesCollection = collection(db, 'categories')
    const queryRef = query(categoriesCollection, where('userId', '==', userId))

    const unsubscribe = onSnapshot(
      queryRef,
      (snapshot) => {
        const fetchedCategories = snapshot.docs.map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id,
            } as Category)
        )
        setCategories(fetchedCategories)
        setLoading(false)
      },
      (error) => {
        setError(error)
        setLoading(false)
      }
    )

    return () => unsubscribe() // Clean up the subscription on unmount
  }, [userId])

  return { categories, loading, error }
}
