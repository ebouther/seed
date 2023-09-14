<template>
  <v-app-bar-nav-icon>
    <nuxt-link :to="localePath('/')" :class="{ scrolled: rootStore.scrolled }">
      <nuxt-img
        format="webp"
        preload
        class="logo"
        :src="appConfig.logo"
      ></nuxt-img> </nuxt-link
  ></v-app-bar-nav-icon>
</template>
<script setup lang="ts">
import { useRootStore } from "~/store/root"
const rootStore = useRootStore()
const appConfig = useAppConfig()
const localePath = useLocalePath()
</script>
<style lang="scss">
.logo:link,
.logo:visited,
.logo:hover,
.logo:active,
.logo {
  transition: all 0.5s ease;
  transform-origin: left top;
  margin-left: 40px;
  margin-bottom: 25px;
  line-height: 6rem;
  color: var(--color);
  text-decoration: none;
  margin-top: 1.4rem;
  margin-bottom: 1.2rem;
  margin-left: 2.4rem;
  max-height: 150px;
  max-width: 150px;
}
.scrolled .logo {
  max-height: 50px;
  max-width: 50px;
}
</style>
