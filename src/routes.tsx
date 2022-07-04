import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { RoutesPaths } from '@/enums'

export const AppRoutes = () => {
  const Home = lazy(() => import('@/pages/Home'))
  const About = lazy(() => import('@/pages/About'))

  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path={RoutesPaths.home} element={<Home />} />
        <Route path={RoutesPaths.about} element={<About />} />
        <Route path='*' element={<Navigate replace to={RoutesPaths.home} />} />
      </Routes>
    </Suspense>
  )
}
