import { AnimatePresence, motion } from 'framer-motion'
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
              <motion.div
                initial={{ opacity: 0, height: '200vh' }}
                animate={{ opacity: 1, height: '100%' }}
                exit={{ opacity: 0, height: '200vh' }}
              >
                <StoreOverview />
              </motion.div>
            }
          />
          <Route
            path={RoutesPaths.uiKit}
            element={
              <motion.div
                initial={{ opacity: 0, height: '200vh' }}
                animate={{ opacity: 1, height: '100%' }}
                exit={{ opacity: 0, height: '200vh' }}
              >
                <UiKit />
              </motion.div>
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
