<script setup>
import { useDisplay } from "vuetify"
import { useRootStore } from "~/store/root"
import sitemap from "~~/assets/data/sitemap"
const config = useAppConfig()
const localePath = useLocalePath()
const rootStore = useRootStore()
const { smAndUp } = useDisplay()
</script>

<template>
  <!-- TOP BAR CONTAINER -->
  <v-app-bar>
    <!--  WEBSITE LOGO -->
    <NavigationLogo></NavigationLogo>
    <v-app-bar-title class="align-start">
      <nuxt-link :to="localePath('/')" class="text-black">{{
        config.full_name
      }}</nuxt-link></v-app-bar-title>

    <template v-slot:append>
      <!--  NAVIGATION -->
      <!-- Client only is need to avoid a bug. temporary workaround until it is fixes: https://github.com/vuetifyjs/vuetify/issues/15323 -->
      <template v-if="smAndUp">
        <template v-for="(link, index) in sitemap.main" :key="index">
          <v-menu :open-on-hover="link.openOnHover" v-if="link.dropdown">
            <template v-slot:activator="{ props }">
              <v-btn exact variant="flat" v-bind="props">{{ $t(link.text) }}
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item :active="$route.fullPath === localePath(child.path)" :to="localePath(child.path)" v-for="(child, index) in link.children"
                :key="index">
                <v-list-item-title>{{ $t(child.text) }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn block variant="flat" :to="link.path ? localePath(link.path) : false" exact v-else>{{ $t(link.text) }}
          </v-btn>
        </template>
        <v-divider vertical></v-divider>
        <!--  LANGUAGE SWITCHER -->
        <NavigationLanguageSwitcher />
      </template>
      <NavigationMainMenu v-else />
    </template>
  </v-app-bar>
</template>
