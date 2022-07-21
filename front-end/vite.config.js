import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '127.0.0.1',
    port: 3004,
    proxy: {
      '*': {
        target: 'http://127.0.0.1:3000'
      }
    }
  }
})
