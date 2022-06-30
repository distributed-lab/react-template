import checker from 'vite-plugin-checker'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import * as fs from 'fs'
import * as path from 'path'
import { configDefaults } from 'vitest/config'

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relative: string) => path.resolve(appDirectory, relative)
const root = path.resolve(__dirname, resolveApp('src'))

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const isProduction = env.VITE_APP_ENVIRONMENT === 'production'
  const isDevelopment = env.VITE_APP_ENVIRONMENT === 'development'
  const isAnalyze = env.VITE_APP_ENVIRONMENT === 'analyze'

  return {
    server: {
      port: Number(env.VITE_PORT),
    },
    publicDir: 'static',
    plugins: [
      react(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: '[name]',
      }),
      checker({
        typescript: true,
        eslint: {
          lintCommand:
            'eslint "{src,config}/**/*.{jsx,tsx}" --cache --max-warnings=0',
        },
      }),
      ...(isAnalyze
        ? [
            visualizer({
              open: true,
            }),
          ]
        : []),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/styles/_mixins.scss";
          @import "@/styles/_functions.scss";
        `,
        },
      },
    },
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      dedupe: ['react'],
      alias: {
        '@': `${root}/`,
        '@config': `${root}/config.ts`,
        '@static': `${root}/../static`,
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true,
          }),
        ],
      },
    },
    test: {
      exclude: [...configDefaults.exclude],
    },
  }
})
