import './styles.scss'

import { config } from '@config'
import { FC, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

import { RoutePaths } from '@/enums'

const AppLogo: FC<HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  ...rest
}) => {
  return (
    <div className={`app-logo ${className}`} {...rest}>
      <img src='/branding/logo.svg' alt={config.APP_NAME} />
      <Link className='app-logo__link' to={RoutePaths.UiKit} />
    </div>
  )
}

export default AppLogo
