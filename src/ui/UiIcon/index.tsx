import './style.scss'

import { HTMLAttributes } from 'react'

import { IconNames } from '@/enums'

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  name: IconNames
}

export default function UiIcon({ name, className = '', ...rest }: Props) {
  return (
    <svg className={`icon ${className}`} aria-hidden='true'>
      <use href={`#${name}-icon`} {...rest} />
    </svg>
  )
}
