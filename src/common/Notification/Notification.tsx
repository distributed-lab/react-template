import 'react-toastify/dist/ReactToastify.css'
import './styles.scss'

import { isObject } from 'lodash-es'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { toast, ToastContainer, TypeOptions } from 'react-toastify'

import { Icon } from '@/common'
import { ICON_NAMES } from '@/enums'
import { Bus } from '@/helpers'
import { NotificationObjectPayload } from '@/types'

const TYPE = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
  default: 'default',
}

const Notification = () => {
  const { t } = useTranslation()

  useEffect(() => {
    Bus.on(Bus.eventList.success, payload => showToast(TYPE.success, payload))
    Bus.on(Bus.eventList.warning, payload => showToast(TYPE.warning, payload))
    Bus.on(Bus.eventList.error, payload => showToast(TYPE.error, payload))
    Bus.on(Bus.eventList.info, payload => showToast(TYPE.info, payload))
    Bus.on(Bus.eventList.default, payload => showToast(TYPE.default, payload))
  })

  const showToast = (
    messageType = TYPE.default,
    payload?: string | NotificationObjectPayload | unknown,
  ): void => {
    let title = ''
    let message = ''
    let iconName: ICON_NAMES | undefined

    const defaultTitles = {
      [TYPE.success]: t('notification.default-title-success'),
      [TYPE.error]: t('notification.default-title-error'),
      [TYPE.warning]: t('notification.default-title-warning'),
      [TYPE.info]: t('notification.default-title-info'),
      [TYPE.default]: t('notification.default-title-default'),
    }
    const defaultMessages = {
      [TYPE.default]: t('notification.default-message-default'),
      [TYPE.info]: t('notification.default-message-info'),
      [TYPE.success]: t('notification.default-message-success'),
      [TYPE.error]: t('notification.default-message-error'),
      [TYPE.warning]: t('notification.default-message-warning'),
    }
    const defaultIconNames = {
      [TYPE.default]: ICON_NAMES.informationCircle,
      [TYPE.info]: ICON_NAMES.informationCircle,
      [TYPE.success]: ICON_NAMES.checkCircle,
      [TYPE.error]: ICON_NAMES.exclamationCircle,
      [TYPE.warning]: ICON_NAMES.exclamation,
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
        icon: false,
        type: messageType as TypeOptions,
      },
    )
  }

  return <ToastContainer />
}

export default Notification
