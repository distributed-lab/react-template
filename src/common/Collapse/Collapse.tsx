import './styles.scss'

import {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
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
      className,
      ...rest
    },
    ref,
  ) => {
    const rootRef = useRef(null)
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

    return (
      <div ref={rootRef} className={`collapse ${className}`} {...rest}>
        <div className='collapse__head'>{head}</div>
        {isCollapseOpen ? <div className='collapse__body'>{body}</div> : <></>}
      </div>
    )
  },
)

export default Collapse
