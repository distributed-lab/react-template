import { useViewportSizes } from '@/hooks'
import { AppRoutes } from '@/routes'

export const App = () => {
  useViewportSizes()

  return (
    <div className='app'>
      <AppRoutes />
    </div>
  )
}
