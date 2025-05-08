import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'src': fileURLToPath(new URL('src', import.meta.url)),
      'blocks': fileURLToPath(new URL('src/components/blocks', import.meta.url)),
      'route': fileURLToPath(new URL('src/components/route', import.meta.url)),
    }
  },
})
