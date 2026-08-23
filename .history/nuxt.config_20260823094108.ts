// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css:[
    '~/assets/css/global.css',
    '~/assets/css/reset.css',
    '~/assets/css/variables.css',
    '~/assets/css/typography.css',
  ],
  app:{
    head:{
      htmlAttrs:{
        lang:"en"
      },

      titleTemplate: '%s | Remote Hustle',
      meta:[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name:"theme-color",
          content: '#ffffff'
        }
      ]
    }
  },
  
})
