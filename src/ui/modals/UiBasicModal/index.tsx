import './styles.scss'

import { MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'

import { IconNames } from '@/enums'
import { UiButton, UiModal } from '@/ui'

type Props = HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    isShown: boolean
    updateIsShown: (isShown: boolean) => void
    isCloseByClickOutside?: boolean
    title?: string
    subtitle?: string
  }

export default function BasicModal({
  isShown,
  updateIsShown,
  isCloseByClickOutside,
  title,
  subtitle,
  children,
  className,
  ...rest
}: Props) {
  return (
    <UiModal
      className={['ui-basic-modal', ...(className ? [className] : [])].join(
        ' ',
      )}
      isShown={isShown}
      updateIsShown={updateIsShown}
      isCloseByClickOutside={isCloseByClickOutside}
      {...rest}
    >
      <div className='ui-basic-modal__inner'>
        <div className='ui-basic-modal__header'>
          <div className='ui-basic-modal__header-titles'>
            {title && <h5 className='ui-basic-modal__title'>{title}</h5>}
            {subtitle && (
              <span className='ui-basic-modal__subtitle'>{subtitle}</span>
            )}
          </div>
          <UiButton
            className='ui-basic-modal__close-btn'
            scheme='none'
            size='none'
            iconRight={IconNames.X}
            onClick={() => updateIsShown(false)}
          />
        </div>
        <div className='ui-basic-modal__body'>{children}</div>
      </div>
    </UiModal>
  )
}
