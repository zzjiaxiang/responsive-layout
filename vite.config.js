import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash-es'],
          echarts: ['echarts'],
        },
      },
    },
    target: ['es2022', 'edge119', 'firefox120', 'chrome119', 'safari17.1'],
  },
})
