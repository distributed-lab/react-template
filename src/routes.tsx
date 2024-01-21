import { lazy, Suspense } from 'react'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'

import { RoutePaths } from '@/enums'
import { MainLayout } from '@/layouts'

export const AppRoutes = () => {
  const StoreOverview = lazy(() => import('@/pages/StoreOverview'))
  const UiKit = lazy(() => import('@/pages/UiKit'))
  const ComplexForm = lazy(() => import('@/pages/ComplexForm'))

  const pageAnimationOpts = {
    initial: 'hide',
    animate: 'show',
    exit: 'hide',
    variants: {
      hide: {
        opacity: 0,
      },
      show: {
        opacity: 1,
      },
    },
    transition: { duration: 0.5 },
  }

  const router = createBrowserRouter([
    {
      path: RoutePaths.Root,
      element: (
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: RoutePaths.UiKit,
              element: <UiKit {...pageAnimationOpts} />,
            },
            {
              path: RoutePaths.ComplexForm,
              element: <ComplexForm {...pageAnimationOpts} />,
            },
            {
              path: RoutePaths.StoreOverview,
              element: <StoreOverview {...pageAnimationOpts} />,
            },
            {
              path: RoutePaths.Root,
              element: <Navigate replace to={RoutePaths.UiKit} />,
            },
            {
              path: '*',
              element: <Navigate replace to={RoutePaths.UiKit} />,
            },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
