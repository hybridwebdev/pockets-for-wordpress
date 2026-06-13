import { defineConfig, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { visualizer } from "rollup-plugin-visualizer"

function safeName(name = 'asset') {
  return name
    .replace(/^@/, '')              // remove leading @ scope
    .replace(/[@\\/]/g, '-')        // kill @ and path separators
    .replace(/[^a-zA-Z0-9-_]/g, '-') // sanitize everything else
}

const ChunkRules = [
  {
    name: "floating-vue",
    match: (id) =>
        id.includes("floating-vue") 
        ||
        id.includes("@floating-ui")
        ||
        id.includes("floating-vue/dist")
  },
  {
    name: "axios",
    match: (id) =>
        id.includes("axios/lib") 
  },
  {
    name: "vue3-toastify",
    match: id => 
      id.includes("vue3-toastify") && !id.includes("vue3-toastify/dist/index.css")
  }
]


export default defineConfig( {

    base: './',

    plugins: [
      vue(),
      visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true
      })
    ],

    css: {

      preprocessorOptions: {

        scss: {

          silenceDeprecations: ['legacy-js-api', 'import', 'if-function', 'color-functions', 'global-builtin'],
          
        },

      },
      
    },

    resolve: {

      /*
        For the most part, you want to put aliases in the root tsconfig.json files path
        entry so that both TS and vite can resolve them without having to
        duplicate them in both places.
      */
      tsconfigPaths: true,
      
      alias: {
        
        /**
          These don't play nice in tsconfig paths
        */
        '@pockets-core-assets': resolve(__dirname, '../../assets/'),
        'vue': 'vue/dist/vue.esm-bundler.js'

      },

    },

    server: {

      port: 8080,

      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      
    },

    build: {

      outDir: resolve( __dirname, '../dist'),
      manifest: 'manifest.json', 
      emptyOutDir: true,
      minify: true,  
      sourcemap: false,
      cssMinify: true,
      chunkSizeWarningLimit: 2000,

      rollupOptions: {
        
        input: {
          pockets: resolve( __dirname, 'src/main.ts'),  
        },
   
        output: {
          
          entryFileNames: (chunkInfo) => `js/${safeName(chunkInfo.name)}.[hash].js`,
          chunkFileNames: (chunkInfo) => `js/chunks/${safeName(chunkInfo.name)}.[hash].js`,

          assetFileNames: (assetInfo) => {

            const ext = assetInfo.name?.split('.').pop()

            const base = safeName(
              assetInfo.name
                ?.replace(/\.[^/.]+$/, '') // remove extension
                || 'asset'
            )

            if (/css/i.test(ext || '')) {
              return `css/${base}.[hash][extname]`
            }

            return `assets/${base}.[hash][extname]`
            
          },
          manualChunks: (id) => {
            
            for (const rule of ChunkRules) {
              if ( rule.match(id) ) {
                return rule.name
              }
            }

          }

        },

      },

    },
    
    assetsInclude: [ 
      '**/*.webp', 
      '**/*.png', 
      '**/*.jpg', 
      '**/*.svg', 
      "**/*.html" 
    ],

} )
 