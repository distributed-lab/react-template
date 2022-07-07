import './styles.scss'

import { FC, HTMLAttributes } from 'react'

import { Spinner } from '@/common/Loader/variants'

enum SCHEMES {
  spinner = 'spinner',
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  scheme?: keyof typeof SCHEMES
}

const Loader: FC<Props> = ({ scheme, ...rest }) => {
  let variant

  switch (scheme) {
    default:
      variant = <Spinner />
  }

  return (
    <div className='loader' {...rest}>
      {variant}
    </div>
  )
}

export default Loader
