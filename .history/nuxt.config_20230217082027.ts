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
    domains: config.modules.image.domains,
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
    [
      '@nuxt/content',
      {
        fullTextSearchFields: [
          'lastname',
          'authors.$.lastname',
          'article_title',
          'caption',
          'institution',
        ],
      }
    ], ['@nuxtjs/robots', { /* module options */ }],'@nuxtjs/device',[
      '@nuxtjs/google-fonts', {
        families: config.modules.fonts.families,
       preconnect: true,prefetch: true,display: 'swap',
      }
    ],'@nuxtjs/html-validator'
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: ["@unocss/reset/tailwind.css"],
  colorMode: {
    classSuffix: "",
  },
  content: {  

   
  }, 
  // https://i18n.nuxtjs.org/
})
