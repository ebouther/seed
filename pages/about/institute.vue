<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card
          class="d-flex align-center justify-center"
          color="grey-lighten-3"
          height="400"
        >
          Picture</v-card
        >
      </v-col>

      <v-col cols="12" sm="6">
        <v-card
          class="d-flex align-center justify-center"
          color="blue-lighten-3"
          height="400"
        >
          Moto</v-card
        >
      </v-col>
      <v-col cols="12">
        <v-card
          class="d-flex align-center justify-center"
          color="green-lighten-3"
          height="400"
        >
          Presentation text with link to&nbsp;<nuxt-link :to="localePath('/support_us')">support us</nuxt-link>,
          &nbsp;<nuxt-link :to="localePath('/people/fellows')">fellowships</nuxt-link
          >, &nbsp;<nuxt-link :to="localePath('/people/team')">team</nuxt-link>,
          &nbsp;<nuxt-link :to="localePath('/activity/digital')">projects</nuxt-link>
          &nbsp;and
          &nbsp;<nuxt-link :to="localePath('/resources')">resources</nuxt-link>
        </v-card>
      </v-col>  <v-col cols="4">
        <v-card
          class="d-flex align-center justify-center"
          color="yellow-lighten-3"
          height="400"
        >
          Picture Lauzun</v-card
        >
      </v-col>
      <v-col cols="8">
        <v-card
          class="d-flex align-center justify-center"
          color="brown-lighten-3"
          height="400"
          :to="localePath('/activities/network')"
        >
          Text about the place linked to
          <nuxt-link :to="localePath('/activities/fellows/accommodations')"
            >fellows accommodations</nuxt-link
          >
          and
          <nuxt-link :to="localePath('/activities/membership')"
            >members presentation</nuxt-link
          ></v-card
        >
      </v-col>
      <v-col cols="8">
        <v-card
          class="d-flex align-center justify-center"
          color="red-lighten-3"
          height="400"
        >
          Governance text with link to
          <nuxt-link :to="localePath('/about/scientific_policy')"
            >scientific policy</nuxt-link
          >
          and <nuxt-link :to="localePath('/people/sab')">sab</nuxt-link></v-card
        >
      </v-col>
      <v-col cols="4">
        <v-card
          class="d-flex align-center justify-center"
          color="purple-lighten-3"
          height="400"
          :to="localePath('/about/network')"
        >
          Network overview</v-card
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
