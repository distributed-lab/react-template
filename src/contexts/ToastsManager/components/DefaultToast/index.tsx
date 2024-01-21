import { HTMLAttributes, isValidElement, ReactNode } from 'react'

import { ToastPayload } from '@/contexts'
import { UiIcon } from '@/ui'

interface Props extends HTMLAttributes<HTMLDivElement> {
  payload: ToastPayload | ReactNode
}

export default function DefaultToast({ payload, ...rest }: Props) {
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
        <UiIcon className='toast__icon' name={msgPayload.iconName} />
      </div>
      <div className='toast__details'>
        <h4 className='toast__title'>{msgPayload.title}</h4>
        <p className='toast__message'>{msgPayload.message}</p>
      </div>
    </div>
  )
}
