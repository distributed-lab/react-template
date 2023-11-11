import './style.scss'

import { FC, HTMLAttributes } from 'react'

import { IconNames } from '@/enums'

interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {
  name: IconNames
}

const Icon: FC<IconProps> = ({ name, className = '', ...rest }) => {
  return (
    <svg className={`icon ${className}`} aria-hidden='true'>
      <use href={`#${name}-icon`} {...rest} />
    </svg>
  )
}

export default Icon
