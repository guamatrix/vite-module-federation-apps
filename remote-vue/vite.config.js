import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:4012/',
  server: {
    port: 4012
  },
  preview: {
    port: 4012
  },
  plugins: [
    vue(),
    federation({
      name: 'remote-vue',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteWrapper': './src/utils/appWrapper.js'
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
