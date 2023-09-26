<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <ListMoleculesPseudoCarousel>
          <v-row>
          <v-col cols="12">
            <v-card class="d-flex align-center justify-center" color="grey-lighten-3" height="424"
              :to="localePath('carousel')" link>
              <ContentDoc :path="'/pages/' + $i18n.locale + '/fellowships_intro'" />
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="d-flex align-center justify-center" color="red-lighten-3" height="400"
              :to="localePath('/activities/fellowships/help')" link>
              <ContentDoc :path="'/pages/' + $i18n.locale + '/fellowships_apply'" />
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="d-flex align-center justify-center" color="green-lighten-3" height="400"
              :to="localePath('/activities/fellowships/commitments')" link>
              <ContentDoc :path="'/pages/' + $i18n.locale + '/fellowships_commitments_intro'
                " />
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="d-flex align-center justify-center" color="pink-lighten-3" height="400"
              :to="localePath('/activities/fellowships/accommodations')" link>
              <ContentDoc :path="'/pages/' + $i18n.locale + '/fellowships_accommodations_intro'
                " />
            </v-card>
          </v-col>
        </v-row>
        </ListMoleculesPseudoCarousel>
      </v-col></v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify"
const { smAndUp } = useDisplay()
const localePath = useLocalePath()
</script>
