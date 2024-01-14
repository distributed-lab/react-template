import './styles.scss'

import { config } from '@config'
import { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

import { RoutePaths } from '@/enums'

export default function UiLogo({
  className = '',
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`ui-logo ${className}`} {...rest}>
      <img src='/branding/logo.svg' alt={config.APP_NAME} />
      <Link className='ui-logo__link' to={RoutePaths.UiKit} />
    </div>
  )
}
