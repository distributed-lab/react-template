import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { RoutesPaths } from '@/enums'

export const AppRoutes = () => {
  const FormsOverview = lazy(() => import('@/pages/FormsOverview'))
  const CommonsOverview = lazy(() => import('@/pages/CommonsOverview'))
  const StoreOverview = lazy(() => import('@/pages/StoreOverview'))
  const UiKit = lazy(() => import('@/pages/UiKit'))

  const location = useLocation()

  return (
    <Suspense fallback={<></>}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path={RoutesPaths.formsOverview}
            element={
              <motion.div
                initial={{ opacity: 0, height: '200vh' }}
                animate={{ opacity: 1, height: '100%' }}
                exit={{ opacity: 0, height: '200vh' }}
              >
                <FormsOverview />
              </motion.div>
            }
          />
          <Route
            path={RoutesPaths.commonsOverview}
            element={
              <motion.div
                initial={{ opacity: 0, height: '200vh' }}
                animate={{ opacity: 1, height: '100%' }}
                exit={{ opacity: 0, height: '200vh' }}
              >
                <CommonsOverview />
              </motion.div>
            }
          />
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
