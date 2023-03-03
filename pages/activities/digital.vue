<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-if="smAndUp">
        <v-card
          class="d-flex align-center justify-center"
          color="yellow-lighten-3"
          height="424"
        >
          <nuxt-img fit="contain"
          height="424"
           src="/images/antoine_cordelois.jpg"></nuxt-img
        ></v-card>
      </v-col>
      <v-col cols="12" sm="8">
        <v-card
          class="d-flex align-center justify-center"
          color="grey-lighten-3"
          height="424"
          :to="localePath('carousel')"
          link
        >
          Overview of digital tools and platforms produced by PARIS IAS, le
          creuset de l'intelligence collective B-)</v-card
        >
      </v-col>
      <v-col cols="4">
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
      <v-col cols="4">
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
      <v-col cols="4">
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
      <v-col cols="4">
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
      <v-col cols="4">
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
      <v-col cols="4">
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
      <v-col cols="4">
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
      <v-col cols="4">
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
      <v-col cols="4">
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
import { useDisplay } from "vuetify";
const { smAndUp } = useDisplay();
const localePath = useLocalePath();
</script>
  