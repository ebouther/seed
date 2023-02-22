<script setup lang="ts">
import { useRootStore } from "~/store/root"

const config = useAppConfig()
const localePath = useLocalePath()
const rootStore = useRootStore()
</script>

<template>
  <!-- TOP BAR CONTAINER -->
  <v-app-bar>
    <!--  WEBSITE LOGO -->
    <Logo></Logo>
    <v-app-bar-title class="align-start">{{ config.name }}</v-app-bar-title>

    <template v-slot:append>
      <!--  LANGUAGE SWITCHER -->
  <!--     <LanguageSwitcher /> -->
      <!--  NAVIGATION -->
      <!-- Client only is need to avoid a bug. temporary workaround until it is fixes: https://github.com/vuetifyjs/vuetify/issues/15323 -->
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn variant="flat" :to="localePath('About')" v-bind="props">{{
              $t("about")}}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="localePath('/about/institute')"
              ><v-list-item-title>Institute</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/about/scientific_policy')">
              <v-list-item-title>Scientific policy</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/about/network')"
              ><v-list-item-title>Network</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn variant="flat" :to="localePath('/activities')" v-bind="props">{{
                $t("activity")
            }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="localePath('/activities/fellowships')"
              ><v-list-item-title>Fellowships</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/activities/memberships')"
              ><v-list-item-title>Memberships</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/activities/digital')">
              <v-list-item-title>Digital tools</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/activities/research')"
              ><v-list-item-title>Research support</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn variant="flat" :to="localePath('/events')" v-bind="props">{{
                $t("events")
            }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="localePath('/events')"
              ><v-list-item-title>Upcoming events</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/events/browse')">
              <v-list-item-title>Browse all events</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> 
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn variant="flat" :to="localePath('/people')" v-bind="props">{{
               $t("people")
            }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="localePath('/people/fellows')"
              ><v-list-item-title>Fellows</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/people/sab')"
              ><v-list-item-title>Scientific Advisory Board</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/people/team')"
              ><v-list-item-title>Team</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/people/browse')">
              <v-list-item-title>Browse</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> 
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn variant="flat" :to="localePath('/resources')" v-bind="props">{{
               $t("resources")
            }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="localePath('/resources/articles')"
              ><v-list-item-title>Articles</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/resources/services')"
              ><v-list-item-title>Services</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/resources/proceedings')"
              ><v-list-item-title>Conferences video proceedings</v-list-item-title>
            </v-list-item>
            <v-list-item :to="localePath('/resources/browse')">
              <v-list-item-title>Browse</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> 
    </template>
  </v-app-bar>
</template>
