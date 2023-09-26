<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-expansion-panels v-model="JSON.parse($route.query.categories)[0]"
          v-if="$route.query && $route.query.categories && $route.query.categories.length > 1 ">
          <v-expansion-panel value="videos">
            <v-expansion-panel-text>
              <ContentDoc :path="'/pages/' + $i18n.locale + '/resources_videos'" />
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel value="publications">
            <v-expansion-panel-text>
              <ContentDoc :path="'/pages/' + $i18n.locale + '/resources_publications'" />
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
          <v-card
            class="d-flex align-center justify-center"
            color="grey-lighten-3"
            height="424"
            :to="localePath('/resources/browse')"
            link
          >
            Overview of the different resources types. Link to projects, featured things, </v-card
          >
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useDisplay } from "vuetify"
  const { smAndUp } = useDisplay()
  const localePath = useLocalePath()
  </script>
  