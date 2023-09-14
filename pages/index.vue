<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          class="d-flex align-center justify-center flex-column"
          color="grey-lighten-3"
          height="424"
          :to="localePath('carousel')"
          link
        >
          CAROUSEL
          <Carousel></Carousel
        ></v-card>
      </v-col>
      <v-col cols="12">
        <v-card
          class="d-flex align-center justify-center"
          color="purple-lighten-3"
          height="200"
          :to="localePath('/about/institute')"
          link
        >
          <ContentDoc
            :path="'/pages/' + $i18n.locale + '/institute_presentation'"
          />
          Institute presentation</v-card
        >
      </v-col>
      <v-col cols="12" sm="8">
        <v-card
          class="d-flex align-center justify-center"
          color="green-lighten-3"
          height="250"
          :to="localePath('events')"
          link
          >Upcoming Events</v-card
        ></v-col
      >
      <v-col cols="4" v-if="smAndUp">
        <v-card
          class="d-flex align-center justify-center"
          color="red-lighten-3"
          height="250"
          :to="localePath('activities/fellowships')"
          link
          >Ads</v-card
        ></v-col
      >

      <v-col cols="4" v-if="smAndUp">
        <v-card
          class="d-flex align-center justify-center"
          color="blue-lighten-3"
          height="250"
          >Twitter feed</v-card
        ></v-col
      ><v-col cols="12" sm="8">
        <v-card
          class="d-flex align-center justify-center"
          color="yellow-lighten-3"
          height="250"
          >Featured resources</v-card
        ></v-col
      >
      <v-col cols="12">
        <v-card
          class="d-flex align-center justify-center"
          color="orange-lighten-3"
          height="400"
        >
          our fellows</v-card
        ></v-col
      >
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify"
const { smAndUp } = useDisplay()
const localePath = useLocalePath()

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const drawer = ref(false)
</script>
