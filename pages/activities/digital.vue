<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card
            class="d-flex align-center justify-center"
            color="grey-lighten-3"
            height="424"
            :to="localePath('carousel')"
            link
          >
            Overview of digital tools and platforms produced by PARIS IAS, le creuset de l'intelligence collective B-)</v-card
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
  