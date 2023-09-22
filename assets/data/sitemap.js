export default {
  main: [
    {
      text: "about",
      dropdown: true,
      children: [
        { text: "institute", path: "/about/institute" },
        { text: "scientific_policy", path: "/about/scientific_policy" },
        { text: "network", path: "/about/network" },
      ],
    },
    {
      text: "activities",
      dropdown: true,
      children: [
        { text: "fellowships", path: "/activities/fellowships" },
        { text: "programs", path: "/activities/programs" },
        {
          text: "events",
          path: "/activities/events",
        },
      ],
    },
    {
      text: "people",
      dropdown: true,
      children: [
        { text: "team", path: "/people/team" },
        { text: "sab", path: "/people/scientific-advisory-board" },
        { text: "fellows", path: "/people/fellows" },
        { text: "browse", path: "/people/browse" },
      ],
    },
    {
      text: "resources",
      path: "/resources",
      openOnHover: true,
      dropdown: true,
      children: [
        { text: "publications", path: "/resources/publications" },
        { text: "videos", path: "/resources/videos" },
        { text: "browse", path: "/resources/browse" },
      ],
    },
  ],
  footer: [
    { text: "tos", path: "/tos" },
    { text: "contact", path: "/contact" },
    { text: "pressroom", path: "/pressroom" },
    { text: "newsletter", path: "/tos" },
    { text: "about", path: "/tos" },
    { text: "privacy_policy", path: "/tos" },
    { text: "support", path: "/support" },
  ],
}
