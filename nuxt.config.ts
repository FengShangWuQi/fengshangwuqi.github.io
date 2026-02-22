export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
    head: {
      title: 'fengshangwuqi',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  modules: ['@unocss/nuxt', '@nuxt/image'],

  image: {
    format: ['webp'],
    quality: 80,
  },
})
