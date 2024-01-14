import './styles.scss'

import { FC, HTMLAttributes } from 'react'

import { AppButton, AppLogo } from '@/common'
import { RoutePaths } from '@/enums'

const AppNavbar: FC<HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  ...rest
}) => {
  return (
    <div className={`app-navbar ${className}`} {...rest}>
      <AppLogo className='app-navbar__logo' />

      <AppButton
        className='app-navbar__link'
        scheme='flat'
        text={RoutePaths.StoreOverview}
        routePath={RoutePaths.StoreOverview}
      />

      <AppButton
        className='app-navbar__link'
        scheme='flat'
        text={RoutePaths.UiKit}
        routePath={RoutePaths.UiKit}
      />

      <AppButton
        className='app-navbar__link'
        scheme='flat'
        text={RoutePaths.ComplexForm}
        routePath={RoutePaths.ComplexForm}
      />
    </div>
  )
}

export default AppNavbar
