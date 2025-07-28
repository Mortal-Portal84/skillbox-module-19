export const StatusValue = {
  delivery: 'Доставляется',
  canceled: 'Отменён',
  delivered: 'Доставлен'
} as const

export const Status = {
  delivery: 'delivery',
  canceled: 'canceled',
  delivered: 'delivered'
} as const

export type StatusValue = (typeof StatusValue)[keyof typeof StatusValue]
export type Status = (typeof Status)[keyof typeof Status]
