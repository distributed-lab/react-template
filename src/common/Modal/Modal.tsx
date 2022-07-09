import './styles.scss'

import { Dispatch, HTMLAttributes, SetStateAction, useRef } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { useClickAway } from 'react-use'

interface Props extends HTMLAttributes<HTMLDivElement> {
  isShown: boolean
  setIsShown: Dispatch<SetStateAction<boolean>>
  isCloseByClickOutside?: boolean
}

const modalRoot = document.getElementById('modal') as HTMLElement

const Modal = ({
  isShown,
  setIsShown,
  isCloseByClickOutside = true,
  children,
  ...rest
}: Props) => {
  const modalRef = useRef(null)
  const modalPaneRef = useRef(null)

  useClickAway(modalPaneRef, () => {
    if (isCloseByClickOutside) {
      setIsShown(false)
    }
  })

  return createPortal(
    <CSSTransition
      nodeRef={modalRef}
      in={isShown}
      timeout={250}
      classNames='modal'
      unmountOnExit
    >
      <div ref={modalRef} className='modal' {...rest}>
        <div ref={modalPaneRef} className='modal__pane'>
          {children}
        </div>
      </div>
    </CSSTransition>,
    modalRoot,
  )
}

export default Modal
