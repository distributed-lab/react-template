import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { RoutesPaths } from '@/enums'

export const AppRoutes = () => {
  const ButtonsOverview = lazy(() => import('@/pages/ButtonsOverview'))
  const InputsOverview = lazy(() => import('@/pages/InputsOverview'))
  const CommonsOverview = lazy(() => import('@/pages/CommonsOverview'))

  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route
          path={RoutesPaths.buttonsOverview}
          element={<ButtonsOverview />}
        />
        <Route path={RoutesPaths.inputsOverview} element={<InputsOverview />} />
        <Route
          path={RoutesPaths.commonsOverview}
          element={<CommonsOverview />}
        />
        <Route
          path='*'
          element={<Navigate replace to={RoutesPaths.buttonsOverview} />}
        />
      </Routes>
    </Suspense>
  )
}