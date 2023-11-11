import type { IconNames } from '@/enums'

export type NotificationObjectPayload = {
  title?: string
  message: string
  iconName?: IconNames
}

export type NotificationPayload = string | NotificationObjectPayload
