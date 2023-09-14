import staticConfuguration from "./static.config"

export default defineAppConfig({
  ...staticConfuguration,
  author: "Antoine Cordelois",
  url: "https://paris-iea.fr",
  lang: {
    locales: ["en", "fr"],
    default: "en",
  },
})
