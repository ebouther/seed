export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: ["@unocss/reset/tailwind.css"],
  colorMode: {
    classSuffix: "",
  },
  i18n: {
    /* module options */
  },
})
