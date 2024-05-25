import type { Timestamp } from 'firebase/firestore'

export type Category = {
  id: string
  name: string
  userId: string
  createdTime: Timestamp
  updatedTime: Timestamp
}
