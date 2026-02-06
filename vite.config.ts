import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vite.dev/config/
export default defineConfig(
  {
    resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [vue(),WindiCSS()],
})
