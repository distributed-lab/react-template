import { useCallback, useEffect, useState } from 'react'

import { config } from '@/config'
import { ErrorHandler } from '@/helpers'
import { useViewportSizes } from '@/hooks'
import { AppRoutes } from '@/routes'
import { UiSpinner } from '@/ui'

export function App() {
  const [isAppInitialized, setIsAppInitialized] = useState(false)

  useViewportSizes()

  const init = useCallback(async () => {
    try {
      document.title = config.APP_NAME
      setIsAppInitialized(true)
    } catch (error) {
      ErrorHandler.processWithoutFeedback(error)
    }

    setIsAppInitialized(true)
  }, [])

  useEffect(() => {
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='app'>
      {isAppInitialized ? <AppRoutes /> : <UiSpinner />}
    </div>
  )
}
