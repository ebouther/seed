<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          class="d-flex align-center justify-center"
          color="grey-lighten-3"
          height="250"
          :to="localePath('carousel')"
          link
        >
          <ContentDoc :path=" $i18n.locale + '/pages/about/network'" />

          Network page intro text</v-card
        >
      </v-col>
      <v-col cols="12" sm="8">
        <v-card
          class="d-flex align-center justify-center"
          color="cyan-lighten-3"
          height="400"
          :to="localePath('carousel')"
          link
        >
          List of members</v-card
        >
      </v-col>
      <v-col cols="4" v-show="smAndUp">
        <v-card
          class="d-flex align-center justify-center"
          color="red-lighten-3"
          height="400"
          :to="localePath('activities/membership')"
          link
          >Ad/call to action membership</v-card
        ></v-col
      ><v-col cols="12" sm="6">
        <v-card
          class="d-flex align-center justify-center"
          color="yellow-lighten-3"
          height="400"
          :to="localePath('/support')"
          link
        >
          <ContentDoc
            :path=" $i18n.locale + '/pages/about/partners'"
          /> </v-card
      ></v-col>
      <v-col cols="12" sm="6">
        <v-card
          class="d-flex align-center justify-center"
          color="green-lighten-3"
          height="400"
        >
          List of partners</v-card
        >
      </v-col>
      <v-col cols="12" sm="8">
        <v-card
          class="d-flex align-center justify-center"
          color="brown-lighten-3"
          height="400"
        >
          List of sponsors</v-card
        >
      </v-col>
      <v-col cols="4" v-show="smAndUp">
        <v-card
          class="d-flex align-center justify-center"
          color="orange-lighten-3"
          height="400"
          :to="localePath('/support')"
          link
          >Ad/call to action support us</v-card
        ></v-col
      >
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify"
const { smAndUp } = useDisplay()
const localePath = useLocalePath()
</script>
