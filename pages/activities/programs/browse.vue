<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          class="d-flex align-center justify-center"
          color="grey-lighten-3"
          height="424"
          link
        >
          Flat list of the events (sortable, filterable, searchable)</v-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify"
const { smAndUp } = useDisplay()
const localePath = useLocalePath()
</script>
