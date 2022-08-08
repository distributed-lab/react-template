import './styles.scss'

import { FC, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import { AppButton, AppLogo } from '@/common'
import { RoutesPaths } from '@/enums'

const AppNavbar: FC<HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  ...rest
}) => {
  const { t } = useTranslation()

  return (
    <div className={`app-navbar ${className}`} {...rest}>
      <AppLogo className='app-navbar__logo' />
      <div className='app-navbar__links-section'>
        <AppButton
          className='app-navbar__link'
          schemes='flat'
          text={t('app-navbar.buttons-overview-link')}
          routePath={RoutesPaths.buttonsOverview}
        />
        <AppButton
          className='app-navbar__link'
          schemes='flat'
          text={t('app-navbar.inputs-overview-link')}
          routePath={RoutesPaths.inputsOverview}
        />
        <AppButton
          className='app-navbar__link'
          schemes='flat'
          text={t('app-navbar.forms-overview-link')}
          routePath={RoutesPaths.formsOverview}
        />
        <AppButton
          className='app-navbar__link'
          schemes='flat'
          text={t('app-navbar.commons-overview-link')}
          routePath={RoutesPaths.commonsOverview}
        />
        <AppButton
          className='app-navbar__link'
          schemes='flat'
          text={t('app-navbar.store-overview-link')}
          routePath={RoutesPaths.storeOverview}
        />
      </div>
    </div>
  )
}

export default AppNavbar
