import './styles.scss'

import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { CSSTransition } from 'react-transition-group'
import { useClickAway } from 'react-use'

interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpenedByDefault?: boolean
  isCloseByClickOutside?: boolean
  head: ReactNode
  body: ReactNode
}

export interface CollapseRef {
  toggleCollapse: () => void
  closeCollapse: () => void
  openCollapse: () => void
}

const Collapse = forwardRef<CollapseRef, Props>(
  (
    {
      isOpenedByDefault = false,
      isCloseByClickOutside = true,
      head,
      body,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)
    const bodyRef = useRef<HTMLDivElement>(null)
    const [isCollapseOpen, setIsCollapseOpen] = useState(isOpenedByDefault)

    const toggleCollapse = () => {
      isCollapseOpen ? closeCollapse() : openCollapse()
    }
    const closeCollapse = () => {
      setIsCollapseOpen(false)
    }
    const openCollapse = () => {
      setIsCollapseOpen(true)
    }

    useImperativeHandle(
      ref,
      (): CollapseRef => ({
        toggleCollapse,
        closeCollapse,
        openCollapse,
      }),
    )

    useClickAway(rootRef, () => {
      if (isCloseByClickOutside) {
        closeCollapse()
      }
    })

    const setHeightCSSVar = () => {
      bodyRef.current?.style.setProperty(
        '--collapse-body-height',
        `${bodyRef.current?.scrollHeight}px`,
      )
    }

    return (
      <div ref={rootRef} className={`collapse ${className}`} {...rest}>
        <div className='collapse__head'>{head}</div>
        <CSSTransition
          nodeRef={bodyRef}
          in={isCollapseOpen}
          timeout={250}
          classNames='collapse__body'
          unmountOnExit
          onEnter={setHeightCSSVar}
          onExited={setHeightCSSVar}
        >
          <div ref={bodyRef} className='collapse__body'>
            {body}
          </div>
        </CSSTransition>
      </div>
    )
  },
)

export default Collapse
