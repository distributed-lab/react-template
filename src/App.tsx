import { config } from '@config'
import { useCallback, useState } from 'react'
import { useEffectOnce } from 'react-use'

import { Loader } from '@/common'
import { ErrorHandler } from '@/helpers'
import { useViewportSizes } from '@/hooks'
import { AppRoutes } from '@/routes'

export function App() {
  const [isAppInitialized, setIsAppInitialized] = useState(false)

  useViewportSizes()

  const init = useCallback(async () => {
    try {
      document.title = config.APP_NAME
    } catch (error) {
      ErrorHandler.processWithoutFeedback(error)
    }

    setIsAppInitialized(true)
  }, [])

  useEffectOnce(() => {
    init()
  })

  return (
    <div className='app'>{isAppInitialized ? <AppRoutes /> : <Loader />}</div>
  )
}
