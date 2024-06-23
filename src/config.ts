import { LogLevelDesc } from 'loglevel'

import packageJson from '../package.json'

type Config = {
  APP_NAME: string
  BUILD_VERSION: string
  LOG_LEVEL: LogLevelDesc
}

export const config: Config = {
  APP_NAME: import.meta.env.VITE_APP_NAME,
  LOG_LEVEL: 'trace' as LogLevelDesc,
  BUILD_VERSION: packageJson.version || import.meta.env.VITE_BUILD_VERSION,
}

/**
 * Enable if u want to use env.js to pass env variables in runtime
 */
// Object.assign(config, _mapEnvCfg(window.document.ENV))

// function _mapEnvCfg(env: ImportMetaEnv | typeof window.document.ENV): {
//   [k: string]: string | boolean | undefined
// } {
//   return mapKeys(
//     pickBy(env, (v, k) => k.startsWith('VITE_APP_')),
//     (v, k) => k.replace(/^VITE_APP_/, ''),
//   )
// }
