import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin to ensure Rocket Loader does not alter module scripts
function rocketLoaderBypass() {
  return {
    name: 'rocket-loader-bypass',
    transformIndexHtml(html) {
      return html.replace(/<script /g, '<script data-cfasync="false" ')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), rocketLoaderBypass()],
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
})
