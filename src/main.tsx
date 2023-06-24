import '@/styles/index.scss'
import '@/localization'
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'

import { App } from '@/App'
import { store } from '@/store'

const root = createRoot(document.getElementById('root') as Element)

root.render(
  <StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </StrictMode>,
)
