<script setup lang="ts">
const route = useRoute()
const crumbs = computed (()=>{
  return route.path.split('/').filter(item => item).map((item) => {return {text: item, to: item}})
})
console.log("route", crumbs);
</script>

<template>
  <v-app>
    <TopBar />
    <v-main>
      <v-container v-if="crumbs">
        <v-breadcrumbs :items="crumbs"></v-breadcrumbs>
      </v-container>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>
