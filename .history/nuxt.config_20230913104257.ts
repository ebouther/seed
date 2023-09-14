import config from "./static.config"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: config.name,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: config.description },
        { name: "msapplication-TileColor", content: "#FFFFFF" },
        // PWA primary color
        { name: "theme-color", content: config.theme.themes.light.primary },
        // Facebook
        { property: "author", content: "awrora" },
        { property: "og:site_name", content: "awrora.ux-maestro.com" },
        { property: "og:locale", content: "en_US" },
        { property: "og:type", content: "website" },
        // Twitter
        { property: "twitter:site", content: "awrora.ux-maestro.com" },
        { property: "twitter:domain", content: "awrora.ux-maestro.com" },
        { property: "twitter:creator", content: "awrora" },
        { property: "twitter:card", content: "summary" },
        { property: "twitter:image:src", content: "/images/logo.png" },
        { property: "og:url", content: config.url },
        { property: "og:title", content: config.name },
        { property: "og:description", content: config.description },
        { name: "twitter:site", content: config.url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: config.logo },
        { property: "og:image", content: config.logo },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
      ],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/styles/main.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/content",
    "@nuxtjs/html-validator", // https://nuxt.com/modules/html-validator
    "nuxt-csurf", // Cross-Site Request Forgery (CSRF) prevention (https://nuxt.com/modules/csurf).
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/device", // https://github.com/nuxt-community/device-module
    "@nuxtjs/robots", // https://github.com/nuxt-modules/robots
    "@nuxtjs/google-fonts", //
    "nuxt-simple-sitemap",
    "nuxt-link-checker",
    "nuxt-schema-org",
    "nuxt-purgecss",
  ],
  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  image: {
    // https://image.nuxt.com/get-started/configuration
  },
  i18n: {
    langDir: "translations/",
    locales: config.lang.locales,
    defaultLocale: config.lang.default,
    strategy: "no_prefix",
    baseUrl: config.url,
    lazy: true,
    detectBrowserLanguage: {
      alwaysRedirect: true,
      redirectOn: "root", // recommended
      fallbackLocale: "en",
    },
    // https://v8.i18n.nuxtjs.org/options/vue-i18n
  },
  robots: {
    // https://nuxt.com/modules/robots#options
  },
  googleFonts: {
    families: config.modules.fonts.families,
    preconnect: true,
    prefetch: true,
    display: "swap",

    // https://google-fonts.nuxtjs.org/getting-started/options
  },
  purgecss: {
    enabled: true, // Always enable purgecss
    safelist: ["my-class"], // Add my-class token to the safelist (e.g. .my-class)
  },
})
