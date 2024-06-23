import react from '@vitejs/plugin-react'
/**
 * @description Enable import if you need polyfills
 *
 * import { nodePolyfills } from 'vite-plugin-node-polyfills'
 * import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
 * import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
 */
import * as fs from 'fs'
import * as path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv } from 'vite'
import { checker } from 'vite-plugin-checker'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import tsconfigPaths from 'vite-tsconfig-paths'

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relative: string) => path.resolve(appDirectory, relative)
const root = path.resolve(__dirname, resolveApp('src'))

enum BaseModes {
  Development = 'development',
  Production = 'production',
  Analyze = 'analyze',
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const devCustomPort = env.VITE_DEV_PORT

  // const buildVersion = env.VITE_APP_BUILD_VERSION

  return {
    ...(devCustomPort
      ? {
          server: {
            port: Number(devCustomPort),
          },
        }
      : {}),
    plugins: [
      react(),

      tsconfigPaths(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: '[name]',
      }),
      checker({
        // remove if you want to prevent build with errors || warnings
        enableBuild: false,
        typescript: true,
        overlay: {
          initialIsOpen: false,
        },
        eslint: {
          useFlatConfig: true,
          lintCommand: 'eslint "{src,config}/**/*.{jsx,tsx}" --cache',
        },
        stylelint: {
          lintCommand: 'stylelint "src/**/*.{vue,sass,scss,css}"',
        },
      }),
      ...(mode === BaseModes.Analyze
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
          additionalData: [
            '@import "@/styles/_functions.scss";',
            '@import "@/styles/_mixins.scss";',
          ].join(''),
        },
      },
    },
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      dedupe: ['react', 'lodash'],
      alias: {
        '@': `${root}/`,
        '@config': `${root}/config.ts`,
        '@static': `${root}/../static`,
      },
    },
    /**
     * @description Enable configuration for polyfills
     *
     * optimizeDeps: {
     *       esbuildOptions: {
     *         define: {
     *           global: 'globalThis',
     *         },
     *       },
     *       // Enable esbuild polyfill plugins
     *       plugins: [
     *         NodeGlobalsPolyfillPlugin({
     *           process: true,
     *           buffer: true,
     *         }),
     *         NodeModulesPolyfillPlugin(),
     *       ],
     *     },
     *     build: {
     *       target: 'esnext',
     *       rollupOptions: {
     *         plugins: [
     *           // Enable rollup polyfills plugin
     *           // used during production bundling
     *           nodePolyfills(),
     *         ],
     *       },
     *     },
     */
  }
})
