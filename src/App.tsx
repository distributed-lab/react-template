import { useCallback, useEffect, useState } from 'react'

import { Loader } from '@/common'
import { ErrorHandler } from '@/helpers'
import { useViewportSizes } from '@/hooks'
import { AppRoutes } from '@/routes'

export function App() {
  const [isAppInitialized, setIsAppInitialized] = useState(false)

  useViewportSizes()

  const init = useCallback(async () => {
    try {
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
    <div className='app'>{isAppInitialized ? <AppRoutes /> : <Loader />}</div>
  )
}
