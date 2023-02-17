<script setup lang="ts">
const config = useAppConfig()
useHead({
  title: config.name,
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/nuxt.png",
    },
  ],
})
useSchemaOrg([
  // @todo Select Identity: https://unhead-schema-org.harlanzw.com//guide/guides/identity
  defineOrganization({
    name: "PARIS IAS",
    logo: "/logo.png",
    sameAs: ["https://twitter.com/company"],
  }),
  defineWebSite({ name: config.name }),
  defineWebPage(),
])
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
