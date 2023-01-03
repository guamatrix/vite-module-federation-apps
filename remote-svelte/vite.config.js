import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:4011/',
  server: {
    port: 4011
  },
  preview: {
    port: 4011
  },
  plugins: [svelte(),
    federation({
      name: 'remote-svelte',
      filename: 'remoteEntry.js',
      exposes: {
        './utils': './src/utils/index.js'
      },
      remotes: {
        remote_library: {
          external: 'http://127.0.0.1:4014/assets/remoteEntry.js'
        }
      }      
    }),

  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
