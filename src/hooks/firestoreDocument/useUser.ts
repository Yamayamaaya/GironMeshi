import { useState, useEffect } from 'react'
import type { User } from '@src/types/user'
import { getFirestore, doc } from '@firebase/firestore'
import { onSnapshot } from 'firebase/firestore'

export const useUserById = (id?: string) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }
    const db = getFirestore()
    const userDocRef = doc(db, 'users', id)

    const unsubscribe = onSnapshot(
      userDocRef,
      (doc) => {
        if (doc.exists()) {
          setUser({ ...doc.data(), id: doc.id } as User)
        } else {
          setUser(null)
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

  return { user, loading, error }
}
