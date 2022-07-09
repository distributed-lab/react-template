import { ICON_NAMES } from '@/enums'

export type NotificationObjectPayload = {
  title?: string
  message: string
  iconName?: ICON_NAMES | undefined
}
