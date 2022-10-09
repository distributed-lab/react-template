import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { RoutesPaths } from '@/enums'

export const AppRoutes = () => {
  const StoreOverview = lazy(() => import('@/pages/StoreOverview'))
  const UiKit = lazy(() => import('@/pages/UiKit'))

  const location = useLocation()

  return (
    <Suspense fallback={<></>}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path={RoutesPaths.storeOverview}
            element={
              <StoreOverview
                initial='hide'
                animate='show'
                exit='hide'
                variants={{
                  hide: {
                    opacity: 0,
                  },
                  show: {
                    opacity: 1,
                  },
                }}
                transition={{ duration: 0.5 }}
              />
            }
          />
          <Route
            path={RoutesPaths.uiKit}
            element={
              <UiKit
                initial='hide'
                animate='show'
                exit='hide'
                variants={{
                  hide: {
                    opacity: 0,
                  },
                  show: {
                    opacity: 1,
                  },
                }}
                transition={{ duration: 0.5 }}
              />
            }
          />
          <Route
            path='*'
            element={<Navigate replace to={RoutesPaths.uiKit} />}
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}
