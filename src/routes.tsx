import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { RoutesPaths } from '@/enums'
// import ButtonsOverview from '@/pages/ButtonsOverview'
// import CommonsOverview from '@/pages/CommonsOverview'
// import InputsOverview from '@/pages/InputsOverview'

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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ButtonsOverview />
              </motion.div>
            }
          />
          <Route
            path={RoutesPaths.inputsOverview}
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <InputsOverview />
              </motion.div>
            }
          />
          <Route
            path={RoutesPaths.commonsOverview}
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
