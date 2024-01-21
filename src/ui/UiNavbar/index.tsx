import './styles.scss'

import { HTMLAttributes } from 'react'

import { RoutePaths } from '@/enums'
import { UiButton, UiLogo } from '@/ui'

export default function UiNavbar({
  className = '',
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`ui-navbar ${className}`} {...rest}>
      <UiLogo className='ui-navbar__logo' />

      <UiButton
        className='ui-navbar__link'
        scheme='flat'
        text={RoutePaths.StoreOverview}
        routePath={RoutePaths.StoreOverview}
      />

      <UiButton
        className='ui-navbar__link'
        scheme='flat'
        text={RoutePaths.UiKit}
        routePath={RoutePaths.UiKit}
      />

      <UiButton
        className='ui-navbar__link'
        scheme='flat'
        text={RoutePaths.ComplexForm}
        routePath={RoutePaths.ComplexForm}
      />
    </div>
  )
}
