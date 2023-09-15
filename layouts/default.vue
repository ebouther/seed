<style lang="scss" scoped>
.content {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script setup>
const route = useRoute()
const crumbs = computed(() => {
  return route.path
    .split("/")
    .filter((item) => item)
    .map((item) => {
      return { title: item, href: item, disabled: false }
    })
})
console.log("crumbs: ", crumbs.value)
</script>

<template>
  <v-app>
    <TopBar />
    <v-main>
      <v-container v-if="crumbs && crumbs.length">
        <v-breadcrumbs :items="crumbs" class="pl-0">
          <template v-slot:title="{ item }">
            {{ $t(item.title).toUpperCase() }}
          </template>
        </v-breadcrumbs>
        <h1
          v-if="
            crumbs.slice(-1)[0] &&
            crumbs.slice(-1)[0].title &&
            crumbs.slice(-1)[0].title.length
          "
        >
          {{ $t(crumbs.slice(-1)[0].title) }}
        </h1>
        <v-divider></v-divider>
      </v-container>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>
