// // vite.config.js
// import { resolve } from 'path'
// import { defineConfig } from 'vite'
// import federation from '@originjs/vite-plugin-federation'

// export default defineConfig({
//   preview: {
//     port: 4014
//   },  
//   build: {
//     lib: {
//       // Could also be a dictionary or array of multiple entry points
//       entry: resolve(__dirname, 'utils'),
//       name: 'utils',
//       // the proper extensions will be added
//       fileName: 'utils',
//       formats: ['esm']
//     },
//     rollupOptions: {
//       output: {
//         inlineDynamicImports: false,
//       },
//     },
//     minify: false
//   },
//   plugins: [
//     federation({
//       name: 'remote-library',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './utils': './utils/index.js'
//       },
//     })
//   ],
// })

// build using dummy app to add the federation expose inside assets
// if not we need to find the way to added it manually
import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  preview: {
    port: 4014
  },
  plugins: [
    federation({
      name: 'remote-library',
      filename: 'remoteEntry.js',
      exposes: {
        './utils': './utils/index.js'
      },
    })
  ],
  build: {
    minify: false
  }
})

