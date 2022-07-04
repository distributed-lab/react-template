import { useTranslation } from 'react-i18next'

import { useViewportSizes } from '@/hooks'
import { AppRoutes } from '@/routes'

export const App = () => {
  useViewportSizes()

  const { t } = useTranslation()

  return (
    <div className='app'>
      <p>{t('app.welcome-title')}</p>
      <AppRoutes />
    </div>
  )
}
