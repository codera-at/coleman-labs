// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "nuxt-particles",
  ],
  build: {
    transpile: ['gsap'],
  },
  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700],
    },
    families: [
      { name: "SourceSans3", provider: "local" },
      { name: "SourceSerif4", provider: "local" },
    ],
  },
});
