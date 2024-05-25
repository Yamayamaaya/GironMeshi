import { useState, useEffect } from 'react'
import type { Tag } from '@src/types/tag'
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from '@firebase/firestore'

export const useTagById = (id?: string) => {
  const [tag, setTag] = useState<Tag | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }
    const fetchTag = async () => {
      try {
        const db = getFirestore()
        const tagDocRef = doc(db, 'tags', id)
        const tagDoc = await getDoc(tagDocRef)
        if (!tagDoc.exists()) {
          setTag(null)
        } else {
          const tag = { ...tagDoc.data(), id: tagDoc.id } as Tag
          setTag(tag)
        }
      } catch (e) {
        setError(e as Error)
      } finally {
        setLoading(false)
      }
    }
    fetchTag()
  }, [id])
  return { tag, loading, error }
}

export const useAllTags = () => {
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const db = getFirestore()
        const querySnapshot = await getDocs(collection(db, 'tags'))
        const tags = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as Tag
        })
        setTags(tags)
      } catch (e) {
        setError(e as Error)
      } finally {
        setLoading(false)
      }
    }
    fetchTags()
  }, [])
  return { tags, loading, error }
}

export const useTagsByIds = (ids: string[]) => {
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const db = getFirestore()
        const tagDocs = await Promise.all(
          ids.map(async (id) => {
            const tagDocRef = doc(db, 'tags', id)
            return getDoc(tagDocRef)
          })
        )
        const tags = tagDocs
          .filter((tagDoc) => tagDoc.exists())
          .map((tagDoc) => {
            return {
              id: tagDoc.id,
              ...tagDoc.data(),
            } as Tag
          })
        setTags(tags)
      } catch (e) {
        setError(e as Error)
      } finally {
        setLoading(false)
      }
    }
    fetchTags()
  }, [ids])
  return { tags, loading, error }
}
