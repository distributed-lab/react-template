import './styles.scss'

import {
  Dispatch,
  forwardRef,
  HTMLAttributes,
  SetStateAction,
  useImperativeHandle,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { useClickAway } from 'react-use'

interface Props extends HTMLAttributes<HTMLDivElement> {
  isShown: boolean
  setIsShown: Dispatch<SetStateAction<boolean>>
  isCloseByClickOutside?: boolean
}

const modalRoot = document.getElementById('modal') as HTMLElement

export interface ModalRef {
  closeModal: () => void
}

const Modal = forwardRef(
  (
    {
      isShown,
      setIsShown,
      isCloseByClickOutside = true,
      children,
      ...rest
    }: Props,
    ref,
  ) => {
    const modalRef = useRef(null)
    const modalPaneRef = useRef(null)

    useClickAway(modalPaneRef, () => {
      if (isCloseByClickOutside) {
        setIsShown(false)
      }
    })

    const closeModal = () => {
      setIsShown(false)
    }

    useImperativeHandle(
      ref,
      (): ModalRef => ({
        closeModal,
      }),
    )

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
  },
)

export default Modal
