import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load environment variables based on mode (e.g., .env.staging, .env.production)
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      __APP_ENV__: env.VITE_ENV,
    },
    build: {
      outDir: 'dist',
    },
    server: {
      port: 5174,
      open: true,
    },
    preview: {
      port: 4174,
    },
  }
})
