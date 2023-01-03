import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCase' 
    }
  },
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        remote_app: {
          external: 'http://127.0.0.1:4010/assets/remoteEntry.js'
        },
        remote_svelte: {
          external: 'http://127.0.0.1:4011/assets/remoteEntry.js'
        },
        remote_vue: {
          external: 'http://127.0.0.1:4012/assets/remoteEntry.js'
        },
        remote_solid: {
          external: 'http://127.0.0.1:4013/assets/remoteEntry.js'
        },
        remote_library: {
          external: 'http://127.0.0.1:4014/assets/remoteEntry.js'
        }    
      },
      shared: {
        react: { singletone: true },
        'react-dom': { singletone: true }
      },
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
