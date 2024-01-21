import './styles.scss'

import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  scheme?: 'thin' | 'medium' | 'circle'
}

export default function UiSkeleton({
  scheme = 'medium',
  className,
  ...rest
}: Props) {
  return (
    <div
      {...rest}
      className={['ui-skeleton', `ui-skeleton--${scheme}`, className].join(' ')}
    />
  )
}
