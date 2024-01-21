import './styles.scss'

import { HTMLAttributes } from 'react'

import { UiSkeleton } from '@/ui'

interface Props extends HTMLAttributes<HTMLDivElement> {
  rows: number
  schemes?: ('thin' | 'medium' | 'circle')[]
  sizing: string
}

export default function UiSkeletonTable({
  rows,
  schemes = ['medium', 'medium', 'medium', 'medium', 'medium'],
  sizing,
  ...rest
}: Props) {
  return (
    <div {...rest} className='ui-skeleton-table'>
      {Array.from({ length: rows }).map((row, idx) => (
        <div
          key={idx}
          className='ui-skeleton-table__row'
          style={{
            gridTemplateColumns: sizing,
          }}
        >
          {schemes.map((scheme, idx) => (
            <UiSkeleton key={idx} scheme={scheme} />
          ))}
        </div>
      ))}
    </div>
  )
}
