<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-if="smAndUp">
        <v-card
          class="d-flex align-center justify-center"
          color="yellow-lighten-3"
          height="400"
        >
          <nuxt-img
            height="400"
            fit="contain"
            src="/images/Paulius_Yamin.jpg"
          ></nuxt-img
        ></v-card>
      </v-col>
      <v-col cols="12" sm="8">
        <v-card
          class="d-flex align-center justify-center"
          color="blue-lighten-3"
          height="400"
        >
          <ContentDoc :path="'/pages/' + $i18n.locale + '/scientific_policy'" />
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card
          class="d-flex align-center justify-center"
          color="orange-lighten-3"
          height="424"
          :to="localePath('carousel')"
          link
        >
          Scientific advisory board
        </v-card>
      </v-col>
      <v-col cols="4" v-if="smAndUp">
        <v-card
          class="d-flex align-center justify-center"
          color="red-lighten-3"
          height="400"
          :to="localePath('reports')"
          link
        >
          Link to annual reports</v-card
        >
      </v-col>
      <v-col cols="4" v-if="smAndUp">
        <v-card
          class="d-flex align-center justify-center"
          color="green-lighten-3"
          height="400"
          :to="localePath('carousel')"
          link
        >
          Link to fellows (?)</v-card
        >
      </v-col>
      <v-col cols="4" v-if="smAndUp">
        <v-card
          class="d-flex align-center justify-center"
          color="pink-lighten-3"
          height="400"
          :to="localePath('carousel')"
          link
        >
          Link to proceedings (?)</v-card
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
