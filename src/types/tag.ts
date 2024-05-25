import type { Timestamp } from 'firebase/firestore'

type Type = 'activityTag' | 'otherTag'

export type Tag = {
  id: string
  title: string
  type: Type
  createdTime: Timestamp
  updatedTime: Timestamp
}
