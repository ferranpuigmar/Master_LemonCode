import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'layout', mode: 'out-in' },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@nuxt/fonts', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxt/image'],

  fonts: {
    defaults: {
      weights: [400, 700, 900],
    },
  },

  runtimeConfig: {
    public: {
      apiBase: '',
    },
  },

  image: {
    domains: ['localhost:3001'],
  },
})