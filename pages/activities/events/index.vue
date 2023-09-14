<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="9">
        <v-card
          class="d-flex align-center justify-center"
          color="grey-lighten-3"
          height="424"
          :to="localePath('/events/browse')"
          link
        >
          Overview of the upcoming events. Link to event browsing</v-card
        >
      </v-col>
      <v-col cols="12" sm="3">
        <v-card
          class="d-flex align-center justify-center"
          color="grey-lighten-3"
          height="400"
        >
          
          <nuxt-img 
          height="400" fit="contain"
          src="/images/sandrine_morvand.jpg"></nuxt-img></v-card
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
