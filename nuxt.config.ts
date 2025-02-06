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
    "@storyblok/nuxt",
    "@nuxt/content",
  ],
  content: {
    preview: {
      // force module initialization on dev env
      api: "https://api.nuxt.studio",
      dev: true,
    },
  },
  storyblok: {
    accessToken: "GWCR9ZIB5UCzHBdmYWFlGAtt",
  },
  build: {
    transpile: ["gsap"],
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
