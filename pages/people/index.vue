<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-expansion-panels v-model="JSON.parse($route.query.categories)[0]"
          v-if="$route.query && $route.query.categories && $route.query.categories.length > 1 ">
          <v-expansion-panel value="board-of-directors">
            <v-expansion-panel-text>
              <ContentDoc :path="'/pages/' + $i18n.locale + '/people_board-of-directors'" />
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel value="team">
            <v-expansion-panel-text>
              <ContentDoc :path="'/pages/' + $i18n.locale + '/people_team'" />
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel value="scientific-advisory-board">
            <v-expansion-panel-text>
              <ContentDoc :path="'/pages/' + $i18n.locale + '/people_scientific-advisory-board'" />
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel value="fellows">
            <v-expansion-panel-text>
              <ContentDoc :path="'/pages/' + $i18n.locale + '/people_fellows'" />
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-card class="d-flex align-center justify-center" color="grey-lighten-3" height="424"
          :to="localePath('/people/browse')" link>
          Overview of the people by category: team, current fellows, recent speakers, featured in resources</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script setup>
import { useDisplay } from "vuetify"
const { smAndUp } = useDisplay()
// const route = useRoute()
const localePath = useLocalePath()
</script>
  