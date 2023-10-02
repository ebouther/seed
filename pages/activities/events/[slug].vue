<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          class="d-flex align-center justify-center"
          color="grey-lighten-3"
        >
          <v-card-title>
            {{ event.title }}
          </v-card-title>
          <v-card-text>
            <ContentDoc
              :path="'/event/' + $i18n.locale.value + '/' + $route.params.slug"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify"
const { $i18n } = useNuxtApp()
const { smAndUp } = useDisplay()
const localePath = useLocalePath()
const route = useRoute()
const { data: event } = await useAsyncData("event", () =>
  queryContent(
    "/event/" + $i18n.locale.value + "/" + route.params.slug
  ).findOne()
)
console.log("event: ", event)
</script>
