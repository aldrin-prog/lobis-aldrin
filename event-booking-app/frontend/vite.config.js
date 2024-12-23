import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/',
  define: {
    global: 'window', // Polyfill the global variable
  },
  resolve: { alias: { jquery: 'jquery/dist/jquery.min.js' } }
})
