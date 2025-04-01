import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: true, // or '0.0.0.0' to expose to network
    port: 5173, // or any port you prefer
    cors: true, // optional, if needed for cross-origin requests
  }
})
