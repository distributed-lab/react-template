import { AnimatePresence } from 'framer-motion'
import { HTMLAttributes } from 'react'
import { Outlet } from 'react-router-dom'

import { AppNavbar } from '@/common'

export default function MainLayout({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={['main-layout', ...(className ? [className] : [])].join(' ')}
    >
      <AppNavbar className='app__navbar' />

      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </div>
  )
}
