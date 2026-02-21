export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  app: {
    baseURL: '/gallery/',
    buildAssetsDir: 'assets',
    head: {
      title: 'Gallery',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/image'],

  image: {
    format: ['webp'],
    quality: 80,
  },
})
