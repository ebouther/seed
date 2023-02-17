import config from "./static.config"
console.log("config: ", config)
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%pageTitle %titleSeparator %siteName'
    }
  },
  extends: ["nuxt-seo-kit"],

  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    [
      "@nuxt/image-edge",
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
      "@nuxt/content",
      {
        fullTextSearchFields: [
          "lastname",
          "authors.$.lastname",
          "article_title",
          "caption",
          "institution",
        ],
      },
    ],

    "@nuxtjs/device",
    [
      "@nuxtjs/google-fonts",
      {
        families: config.modules.fonts.families,
        preconnect: true,
        prefetch: true,
        display: "swap",
      },
    ],
    [
      "@nuxtjs/html-validator",
      {
        // default settings
        htmlValidator: {
          usePrettier: false,
          logLevel: "verbose",
          failOnError: false,
          options: {
            extends: [
              "html-validate:document",
              "html-validate:recommended",
              "html-validate:standard",
            ],
            rules: {
              "svg-focusable": "off",
              "no-unknown-elements": "error",
              // Conflicts or not needed as we use prettier formatting
              "void-style": "off",
              "no-trailing-whitespace": "off",
              // Conflict with Nuxt defaults
              "require-sri": "off",
              "attribute-boolean-style": "off",
              "doctype-style": "off",
              // Unreasonable rule
              "no-inline-style": "off",
            },
          },
        },
      },
    ],
    ["nuxt-typed-router", {}],
    /* [ // disabled while it is not working with Nuxt 3.2.0
      "nuxt-security",
      {
        headers: {
          crossOriginResourcePolicy: {
            value: "same-origin",
            route: "/**",
          },
          crossOriginOpenerPolicy: {
            value: "same-origin",
            route: "/**",
          },
          crossOriginEmbedderPolicy: {
            value: "require-corp",
            route: "/**",
          },
          contentSecurityPolicy: {
            value: {
              'base-uri': ["'self'"],
              'connect-src': ["'self'", ...(process.env.NODE_ENV === 'production' ? [] : ['ws://localhost:*'])],
              'default-src': ["'self'"],
              'font-src': ["'self'", 'https:', 'data:'],
              'form-action': ["'self'"],
              'frame-ancestors': ["'self'"],
              'img-src': ["'self'", 'data:'],
              'object-src': ["'none'"],
              'script-src-attr': ["'none'"],
              'style-src': ["'self'", 'https:', "'unsafe-inline'"],
              'upgrade-insecure-requests': true
            },
            route: "/**",
          },
          originAgentCluster: { value: "?1", route: "/**" },
          referrerPolicy: { value: "no-referrer", route: "/**" },
          strictTransportSecurity: {
            value: { maxAge: 15552000, includeSubdomains: true },
            route: "/**",
          },
          xContentTypeOptions: { value: "nosniff", route: "/**" },
          xDNSPrefetchControl: { value: "off", route: "/**" },
          xDownloadOptions: { value: "noopen", route: "/**" },
          xFrameOptions: { value: "SAMEORIGIN", route: "/**" },
          xPermittedCrossDomainPolicies: { value: "none", route: "/**" },
          xXSSProtection: { value: "0", route: "/**" },
        },
        requestSizeLimiter: {
          value: {
            maxRequestSizeInBytes: 2000000,
            maxUploadFileRequestInBytes: 8000000,
          },
          route: "",
          throwError: true,
        },
        rateLimiter: {
          // Twitter search rate limiting
          value: {
            tokensPerInterval: 150,
            interval: "hour",
            fireImmediately: true,
          },
          route: "",
          throwError: true,
        },
        xssValidator: { value: {}, route: "", throwError: true },
        corsHandler: {
          value: {
            origin: "*",
            methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
            preflight: { statusCode: 204 },
          },
          route: "",
        },
        allowedMethodsRestricter: { value: "*", route: "", throwError: true },
        hidePoweredBy: true,
        basicAuth: false,
        enabled: true,
      },
    ], */['@morev/vue-transitions/nuxt', {}],
    ['@vite-pwa/nuxt', {}]
  ],
  // for nuxt schema

  runtimeConfig: {
    public: {
      siteUrl: config.url || "https://example.com",
      siteName: config.name || "Awesome Site",
      siteDescription: config.description || "Welcome to my awesome site!",
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
      titleSeparator:   config.titleSeparator ||'|',
    },
  },
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: ["@unocss/reset/tailwind.css"],
  colorMode: {
    classSuffix: "",
  },
  content: {},
  // https://i18n.nuxtjs.org/
  //check for broken routes (//TODO : compelte)
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        // any URLs that can't be discovered by crawler
      ],
    },
  },
})
