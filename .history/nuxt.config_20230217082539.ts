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
    ],['@nuxtjs/html-validator', {
      // default settings
      htmlValidator: {
        usePrettier: false,
        logLevel: 'verbose',
        failOnError: false,
        options: {
          extends: [
            'html-validate:document',
            'html-validate:recommended',
            'html-validate:standard'
          ],
          rules: {
            'svg-focusable': 'off',
            'no-unknown-elements': 'error',
            // Conflicts or not needed as we use prettier formatting
            'void-style': 'off',
            'no-trailing-whitespace': 'off',
            // Conflict with Nuxt defaults
            'require-sri': 'off',
            'attribute-boolean-style': 'off',
            'doctype-style': 'off',
            // Unreasonable rule
            'no-inline-style': 'off'
          }
        }
      }
    }
    ]
  ],
    // recommended  
    runtimeConfig: {    public: {      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',    }  },
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
