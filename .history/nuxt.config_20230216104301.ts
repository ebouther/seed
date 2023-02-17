import config from "./static.config"
console.log("config: ", config)

export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    [
      "@nuxtjs/i18n",
      {
        /*         langDir: "translations/",
        locales: config.lang.locales,
        defaultLocale: config.lang.default,
        strategy: "no_prefix",
        vueI18n: {
          fallbackLocale: config.lang.default,
        },
        baseUrl: config.url,
        lazy: true,
        detectBrowserLanguage: {
          alwaysRedirect: true,
          fallbackLocale: "en",
        }, */
      },
    ],
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: ["@unocss/reset/tailwind.css"],
  colorMode: {
    classSuffix: "",
  },
  // https://i18n.nuxtjs.org/
})
