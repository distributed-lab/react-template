import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { RoutesPaths } from '@/enums'

export const AppRoutes = () => {
  const ButtonsOverview = lazy(() => import('@/pages/ButtonsOverview'))
  const InputsOverview = lazy(() => import('@/pages/InputsOverview'))
  const CommonsOverview = lazy(() => import('@/pages/CommonsOverview'))

  const location = useLocation()

  return (
    <Suspense fallback={<></>}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path={RoutesPaths.buttonsOverview}
            element={
              <motion.div
                initial={{ opacity: 0, height: '200vh' }}
                animate={{ opacity: 1, height: '100%' }}
                exit={{ opacity: 0, height: '200vh' }}
              >
                <ButtonsOverview />
              </motion.div>
            }
          />
          <Route
            path={RoutesPaths.inputsOverview}
            element={
              <motion.div
                initial={{ opacity: 0, height: '200vh' }}
                animate={{ opacity: 1, height: '100%' }}
                exit={{ opacity: 0, height: '200vh' }}
              >
                <InputsOverview />
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
            path='*'
            element={<Navigate replace to={RoutesPaths.buttonsOverview} />}
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}
