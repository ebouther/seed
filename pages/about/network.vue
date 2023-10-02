<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <v-card
          class="d-flex align-center justify-center"
          color="grey-lighten-3"
          height="400"
        >
          <v-img
            height="400"
            fit="contain"
            src="/images/durandcecile.jpg"
          ></v-img
        ></v-card>
      </v-col>
      <v-col cols="12" sm="9">
        <v-card
          class="d-flex align-center justify-center"
          color="grey-lighten-3"
          height="250"
          link
        >
          <ContentDoc :path="'/pages/' + $i18n.locale.value + '/network'" />
        </v-card>
      </v-col>

      <v-col cols="12" sm="8">
        <v-card
          class="d-flex align-center justify-center"
          color="cyan-lighten-3"
          height="400"
          link
        >
          <h3>{{ $t("our-members") }}</h3>
          <v-img
            class="d-flex"
            height="400"
            fit="contain"
            src="/images/partners/partners.jpg"
          ></v-img
        ></v-card>
      </v-col>
      <v-col cols="4" v-show="smAndUp">
        <v-card
          class="d-flex align-center justify-center"
          color="red-lighten-3"
          height="400"
          :to="localePath('activities/membership')"
          link
        >
          <ActionsSmallContainer
            :action="action"
          ></ActionsSmallContainer> </v-card></v-col
      ><v-col cols="12" sm="6">
        <v-card
          class="d-flex align-center justify-center"
          color="yellow-lighten-3"
          height="400"
          :to="localePath('/support')"
          link
        >
          <ContentDoc
            :path="'/pages/' + $i18n.locale.value + '/partners'"
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
        >
          <ActionsSmallContainer
            :action="action"
          ></ActionsSmallContainer></v-card
      ></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify"
const { smAndUp } = useDisplay()
const localePath = useLocalePath()
const { $i18n } = useNuxtApp()
const { data: action } = await useAsyncData("actions", () =>
  queryContent("/actions/" + $i18n.locale.value)
    .limit(1)
    .find()
)
</script>
