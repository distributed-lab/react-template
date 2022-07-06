import './style.scss'

import { FC, HTMLAttributes } from 'react'

import { ICON_NAMES } from '@/enums/icon-names.enum'

interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {
  name: ICON_NAMES
}

const Icon: FC<IconProps> = ({ name, className, ...rest }) => {
  return (
    <svg className={`icon ${className}`} aria-hidden='true'>
      <use xlinkHref={`#${name}-icon`} {...rest} />
    </svg>
  )
}

export default Icon
