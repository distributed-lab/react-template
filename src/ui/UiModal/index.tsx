import './styles.scss'

import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import { HTMLAttributes, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useClickAway } from 'react-use'

type Props = {
  isShown: boolean
  updateIsShown: (isShown: boolean) => void
  isCloseByClickOutside?: boolean
} & HTMLAttributes<HTMLDivElement> &
  MotionProps

const modalRoot = document.getElementById('modal') as HTMLElement

export default function UiModal({
  isShown,
  updateIsShown,
  isCloseByClickOutside = true,
  children,
  className,
  ...rest
}: Props) {
  const modalPaneRef = useRef(null)

  useClickAway(modalPaneRef, () => {
    if (isCloseByClickOutside) {
      updateIsShown(false)
    }
  })

  return createPortal(
    <AnimatePresence initial={false}>
      {isShown && (
        <motion.div
          className={['ui-modal', className].join(' ')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          {...rest}
        >
          <div ref={modalPaneRef} className='ui-modal__pane'>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot,
  )
}
