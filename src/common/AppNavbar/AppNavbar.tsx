import './styles.scss'

import { FC, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import { AppButton, AppLogo } from '@/common'
import { RoutesPaths } from '@/enums'

const AppNavbar: FC<HTMLAttributes<HTMLDivElement>> = ({ ...rest }) => {
  const { t } = useTranslation()

  return (
    <div {...rest} className='app-navbar'>
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
      </div>
    </div>
  )
}

export default AppNavbar
