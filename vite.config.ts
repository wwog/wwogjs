import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

const rootPath = resolve(__dirname, './')

const define = {}
/* https://vitest.dev/guide/in-source.html#production-build */
if (process.env.NODE_ENV === 'production') {
  define['import.meta.vitest'] = undefined
}

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(rootPath, 'src'),
    },
  },
  define,
  test: {
    includeSource: ['src/**/*.ts'],
  },
  plugins: [
    dts({
      outputDir: 'types',
      skipDiagnostics: false,
      insertTypesEntry: true,
      rollupTypes: true,
      staticImport: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'wwog-lib-name',
    },
  },
})
