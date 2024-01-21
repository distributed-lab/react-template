import { FC, HTMLAttributes, isValidElement, ReactNode } from 'react'

import { Icon } from '@/common'
import { ToastPayload } from '@/contexts'

interface Props extends HTMLAttributes<HTMLDivElement> {
  payload: ToastPayload | ReactNode
}

const DefaultToast: FC<Props> = ({ payload, ...rest }) => {
  if (isValidElement(payload)) {
    return (
      <div {...rest} className='toast__body'>
        {payload}
      </div>
    )
  }

  const msgPayload = payload as ToastPayload

  return (
    <div {...rest} className='toast__body'>
      <div className='toast__icon-wrp'>
        <Icon className='toast__icon' name={msgPayload.iconName} />
      </div>
      <div className='toast__details'>
        <h4 className='toast__title'>{msgPayload.title}</h4>
        <p className='toast__message'>{msgPayload.message}</p>
      </div>
    </div>
  )
}

export default DefaultToast
