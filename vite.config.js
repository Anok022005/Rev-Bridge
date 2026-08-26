import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative asset paths for GitHub Pages / static hosting
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false
  }
})
