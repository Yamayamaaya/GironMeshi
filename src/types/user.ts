import type { Timestamp } from 'firebase/firestore'

export type User = {
  id: string
  name: string
  email: string
  iconImageUrl: string
  description: string
  includePaymentMethodInOrder: boolean
  paymentMethods: string[]
  isSetUpWaitingCardLimit: boolean
  waitingCardLimit: number
  createdTime: Timestamp
  updatedTime: Timestamp
}

export const userPropertiesLabel = {
  id: 'ID',
  name: '名前',
  email: 'メールアドレス',
  iconImageUrl: 'アイコン画像',
  description: '説明',
  includePaymentMethodInOrder: '注文情報に決済方法を含める',
  paymentMethods: '決済方法',
  isSetUpWaitingCardLimit: '待ち札の番号を設定する',
  waitingCardLimit: '待ち札番号の上限',
  createdTime: '作成日',
  updatedTime: '更新日',
}
