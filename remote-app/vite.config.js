import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:4010/',
  server: {
    port: 4010
  },
  preview: {
    port: 4010
  },
  plugins: [
    react(),
    federation({
      name: 'remote-app',
      // optional same value
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteApp': './src/App.jsx'
      },
      remotes: {
        remote_library: {
          external: 'http://127.0.0.1:4014/assets/remoteEntry.js'
        }
      },      
      shared: {
        react: { singletone: true },
        'react-dom': { singletone: true }
      }
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
