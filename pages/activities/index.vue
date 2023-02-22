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
            Overview of PARIS IAS activities text: link to scientific policy, sab, support us</v-card
          >
        </v-col>
        <v-col cols="4" >
        <v-card
          class="d-flex align-center justify-center"
          color="red-lighten-3"
          height="400"
          :to="localePath('resources')"
            link
        >
          Fellowships overview</v-card
        >
      </v-col>
      <v-col cols="4" >
        <v-card
          class="d-flex align-center justify-center"
          color="green-lighten-3"
          height="400"
          :to="localePath('carousel')"
            link
        >
          Memberships overview</v-card
        >
      </v-col>
      <v-col cols="4" >
        <v-card
          class="d-flex align-center justify-center"
          color="pink-lighten-3"
          height="400"
          :to="localePath('carousel')"
            link
        >
         Projects overview</v-card
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
  