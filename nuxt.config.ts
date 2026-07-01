export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },

  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
    head: {
      title: '枫上雾棋',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  modules: ['@unocss/nuxt'],
})
