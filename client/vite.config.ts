import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['granular-babbling-unmixable.ngrok-free.dev'],
    proxy:{
      '/api': 'http://localhost:8080',
    }
  }
})
