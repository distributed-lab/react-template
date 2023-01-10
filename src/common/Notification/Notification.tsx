import 'react-toastify/dist/ReactToastify.css'
import './styles.scss'

import { isObject } from 'lodash-es'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { toast, ToastContainer, TypeOptions } from 'react-toastify'
import { useEffectOnce } from 'react-use'

import { Icon } from '@/common'
import { ICON_NAMES } from '@/enums'
import { Bus } from '@/helpers'
import { NotificationObjectPayload } from '@/types'

const NOTIFICATION_TYPE = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
  default: 'default',
}

const Notification = () => {
  const { t } = useTranslation()

  const showToast = useCallback(
    (
      messageType = NOTIFICATION_TYPE.default,
      payload?: string | NotificationObjectPayload | unknown,
    ) => {
      let title = ''
      let message = ''
      let iconName: ICON_NAMES | undefined

      const defaultTitles = {
        [NOTIFICATION_TYPE.success]: t('notifications.default-title-success'),
        [NOTIFICATION_TYPE.error]: t('notifications.default-title-error'),
        [NOTIFICATION_TYPE.warning]: t('notifications.default-title-warning'),
        [NOTIFICATION_TYPE.info]: t('notifications.default-title-info'),
        [NOTIFICATION_TYPE.default]: t('notifications.default-title-default'),
      }
      const defaultMessages = {
        [NOTIFICATION_TYPE.default]: t('notifications.default-message-default'),
        [NOTIFICATION_TYPE.info]: t('notifications.default-message-info'),
        [NOTIFICATION_TYPE.success]: t('notifications.default-message-success'),
        [NOTIFICATION_TYPE.error]: t('notifications.default-message-error'),
        [NOTIFICATION_TYPE.warning]: t('notifications.default-message-warning'),
      }
      const defaultIconNames = {
        [NOTIFICATION_TYPE.default]: ICON_NAMES.informationCircle,
        [NOTIFICATION_TYPE.info]: ICON_NAMES.informationCircle,
        [NOTIFICATION_TYPE.success]: ICON_NAMES.checkCircle,
        [NOTIFICATION_TYPE.error]: ICON_NAMES.exclamationCircle,
        [NOTIFICATION_TYPE.warning]: ICON_NAMES.exclamation,
      }

      if (isObject(payload)) {
        const msgPayload = payload as NotificationObjectPayload

        title = msgPayload.title || ''
        message = msgPayload.message
        iconName = msgPayload?.iconName
      } else if (payload) {
        message = payload as string
      } else {
        message = defaultMessages[messageType]
      }

      if (!title) {
        title = defaultTitles[messageType]
      }
      if (!iconName) {
        iconName = defaultIconNames[messageType]
      }

      toast(
        <div className='notification'>
          <Icon className='notification__icon' name={iconName} />
          <div className='notification__details'>
            <h4 className='notification__title'>{title}</h4>
            <p className='notification__message'>{message}</p>
          </div>
        </div>,
        {
          // toastId: `${messageType}}`,
          icon: false,
          type: messageType as TypeOptions,
        },
      )
    },
    [t],
  )

  useEffectOnce(() => {
    Bus.on(Bus.eventList.success, payload =>
      showToast(NOTIFICATION_TYPE.success, payload),
    )
    Bus.on(Bus.eventList.warning, payload =>
      showToast(NOTIFICATION_TYPE.warning, payload),
    )
    Bus.on(Bus.eventList.error, payload =>
      showToast(NOTIFICATION_TYPE.error, payload),
    )
    Bus.on(Bus.eventList.info, payload =>
      showToast(NOTIFICATION_TYPE.info, payload),
    )
    Bus.on(Bus.eventList.default, payload =>
      showToast(NOTIFICATION_TYPE.default, payload),
    )
  })

  return <ToastContainer />
}

export default Notification
