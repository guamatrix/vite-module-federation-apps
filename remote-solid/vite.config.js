import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  base: 'http://localhost:4013/',
  server: {
    port: 4013,
  },
  preview: {
    port: 4013,
  },
  plugins: [
    solidPlugin(),
    federation({
      name: 'remote-solid',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteWrapper': './src/utils/appWrapper.jsx'
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
});
