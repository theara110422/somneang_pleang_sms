import type { NuxtPage } from "nuxt/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app:{
    // baseURL: '/somneang-pleang-school-system/',
    head: {
      title: "Somneang Pleang School System",
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  hooks:{
    'pages:extend' (pages) {

      function setMiddleware (pages: NuxtPage[]) {
        
        for (const page of pages) {
          if(pages.length > 0){
            page.meta ||= {}
            page.meta.middleware = ['auth']
          }
        }
      }
      setMiddleware(pages)
    }
  },

})
