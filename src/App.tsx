import { AppNavbar, Notification } from '@/common'
import { useViewportSizes } from '@/hooks'
import { AppRoutes } from '@/routes'

export const App = () => {
  useViewportSizes()

  return (
    <div className='app'>
      <AppNavbar className='app__navbar' />
      <AppRoutes />
      <Notification />
    </div>
  )
}
