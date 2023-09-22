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
          <HomeCarousel :featured="featured"></HomeCarousel
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
            :path="'/pages/' + $i18n.locale.value + '/institute_presentation'"
          />
          Institute presentation {{ $i18n.locale.value }}</v-card
        >
      </v-col>
      <v-col cols="12" sm="8">
        <v-card
          class="d-flex align-center justify-center flex-column"
          color="green-lighten-3"
          :to="localePath('events')"
          link
        >
          Upcoming Events
          <EventsListContainer :events="events"></EventsListContainer> </v-card
      ></v-col>
      <v-col cols="4" v-if="smAndUp">
        <ActionsSmallContainer :action="action"></ActionsSmallContainer>
      </v-col>

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

<script setup>
import { useDisplay } from "vuetify"
const { smAndUp } = useDisplay()
const localePath = useLocalePath()

const config = useAppConfig()
const { locale } = useI18n()

const { $i18n } = useNuxtApp()
console.log("/" + $i18n.locale.value + "/carousel")
console.log($i18n.locale.value)
const { data: featured } = await useAsyncData("featured-list", () =>
  queryContent("/carousel/" + $i18n.locale.value).find()
)
const { data: events } = await useAsyncData("event-list", () =>
  queryContent("/events/" + $i18n.locale.value)
    .sort({ date: 1 })
    .find()
)
const { data: action } = await useAsyncData("actions", () =>
  queryContent("/actions/" + $i18n.locale.value)
    .limit(1)
    .find()
)
</script>
