import type { Timestamp } from 'firebase/firestore'

export type Follow = {
  id: string
  userId: string
  organizationId: string
  createdTime: Timestamp
  updatedTime: Timestamp
}
