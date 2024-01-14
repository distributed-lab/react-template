import { AnimatePresence } from 'framer-motion'
import { HTMLAttributes } from 'react'
import { Outlet } from 'react-router-dom'

import { UiNavbar } from '@/ui'

export default function MainLayout({
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...rest} className='main-layout'>
      <UiNavbar className='app__navbar' />

      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </div>
  )
}
