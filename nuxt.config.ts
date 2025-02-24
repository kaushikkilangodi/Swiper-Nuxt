import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { defineNuxtModule } from 'nuxt'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-swiper'
    //...
  ],
 
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
