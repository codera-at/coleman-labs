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
    "@nuxtjs/seo",
  ],
  storyblok: {
    accessToken: "GWCR9ZIB5UCzHBdmYWFlGAtt",
  },
  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
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
  site: {
    url: "https://colemanlab.stanford.edu/",
    name: "The Neural Interaction Lab",
    description:
      "The Coleman Lab is home to a diverse team of researchers studying a variety of disciplines including: Bioengineering, Electrical Engineering, Biology, Computer Science, and more. Check out our other pages for more information!",
  },
});
