import '@/styles/index.scss'
import '@/localization'
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'

import { initApi } from '@/api'
import { App } from '@/App'
import { Notification } from '@/common'
import { store } from '@/store'

initApi()

const root = createRoot(document.getElementById('root') as Element)

root.render(
  <StrictMode>
    <StoreProvider store={store}>
      <App />

      <Notification />
    </StoreProvider>
  </StrictMode>,
)
