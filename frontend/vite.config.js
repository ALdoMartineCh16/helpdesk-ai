import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // Also proxying direct calls if needed, but using /api prefix is better practice. 
      // However, our backend routes are at /tickets, /auth. 
      // Let's proxy specific routes or just root if we want to be lazy, 
      // but better to map /tickets and /auth.
      '/tickets': 'http://localhost:3000',
      '/auth': 'http://localhost:3000',
    }
  }
})
