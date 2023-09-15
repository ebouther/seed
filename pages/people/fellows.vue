<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          class="d-flex align-center justify-center"
          color="grey-lighten-3"
          height="424"
          :to="localePath('/people/browse')"
          link
        >
          Fixed (custom?) List of the IAS current fellows (possibly with a
          search) + a
          <i>see more</i> that leads to "browse people"</v-card
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
