import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://raven-v2.vercel.app',
        changeOrigin: true,
        secure: true,
        // optional: keep /api path as-is
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
})


