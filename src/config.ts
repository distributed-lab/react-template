import { mapKeys, pickBy } from 'lodash-es'
import { LogLevelDesc } from 'loglevel'

import packageJson from '../package.json'

interface AppConfig {
  APP_NAME: string
  API_URL: string
  LOG_LEVEL: LogLevelDesc
  BUILD_VERSION: string
}

export const config: AppConfig = {
  API_URL: import.meta.env.VITE_API_URL,
  APP_NAME: import.meta.env.VITE_APP_NAME,
  LOG_LEVEL: 'trace',
  BUILD_VERSION: packageJson.version || import.meta.env.VITE_APP_BUILD_VERSION,
} as const

Object.assign(config, _mapEnvCfg(import.meta.env))
Object.assign(config, _mapEnvCfg(window.document.ENV))

function _mapEnvCfg(env: ImportMetaEnv | typeof window.document.ENV): {
  [k: string]: string | boolean | undefined
} {
  return mapKeys(
    pickBy(env, (v, k) => k.startsWith('VITE_APP_')),
    (v, k) => k.replace(/^VITE_APP_/, ''),
  )
}