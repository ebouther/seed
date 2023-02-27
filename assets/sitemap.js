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
    },   {
      text: "activities",
      path: "/activities",
      openOnHover:true,
      dropdown: true,
      children: [
        { text: "fellowships", path: "/activities/fellowships" },
        { text: "memberships", path: "/activities/memberships" },
        { text: "digital", path: "/activities/digital" },
        { text: "research", path: "/activities/research" },
      ],
    }, {
      text: "events",
      path: "/events",
      openOnHover:true,
      dropdown: true,
      children: [
        { text: "upcoming", path: "/events/upcoming" },
        { text: "browse", path: "/events/browse" },
      ],
    },{
      text: "people",
      path: "/people",
      openOnHover:true,
      dropdown: true,
      children: [
        { text: "team", path: "/people/team" },
        { text: "sab", path: "/people/sab" },
        { text: "fellows", path: "/people/fellows" },
        { text: "browse", path: "/people/browse" },
      ],
    },{
      text: "resources",
      path: "/resources",
      openOnHover:true,
      dropdown: true,
      children: [
        { text: "articles", path: "/resources/articles" },
        { text: "tools", path: "/resources/tools" },
        { text: "proceedings", path: "/resources/proceedings" },
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
