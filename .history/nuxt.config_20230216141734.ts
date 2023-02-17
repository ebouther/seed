import config from "./static.config"
console.log("config: ", config)

export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    [
      '@nuxt/image-edge',
       // https://v1.image.nuxtjs.org
  {
    screens: {
      avatarSm: 24,
      avatarLg: 48,
      logo: 32,
      migration: 536,
      blogImage: 864,
    },
    domains: config.modules.image.providers,
  },
    ],
    [
      "@nuxtjs/i18n",
      {
        langDir: "translations/",
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
        },
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
  i18n: {},
  // https://i18n.nuxtjs.org/
})
