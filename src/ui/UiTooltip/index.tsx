import { HTMLAttributes, ReactElement, useMemo } from 'react'
import { type ITooltip, Tooltip } from 'react-tooltip'
import { v4 as uuidv4 } from 'uuid'

type Props = ITooltip &
  HTMLAttributes<HTMLDivElement> & {
    msgContent: string | ReactElement
  }

export default function UiTooltip({
  msgContent,
  className,
  children,
  style,
  ...rest
}: Props) {
  const uuid = useMemo(() => uuidv4(), [])

  return (
    <>
      <div className='ui-tooltip' data-tooltip-id={uuid}>
        {children}
      </div>

      <Tooltip id={uuid} style={style} className={className} {...rest}>
        {msgContent}
      </Tooltip>
    </>
  )
}
