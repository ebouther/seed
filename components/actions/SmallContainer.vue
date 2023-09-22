<template>
  <v-card
    class="mx-auto h-100 d-flex align-center justify-center flex-column"
    :color="action[0].color || 'white'"
  >
    <nuxt-img
      class="w-100"
      v-if="action[0].picture"
      :src="action[0].picture"
    ></nuxt-img>
    <v-card-text>
      <h4 class="text-h4 text--primary">{{ action[0].title }}</h4>
    </v-card-text>
    <v-card-actions>
      <v-btn :to="action[0].link" class="ml-auto">
        {{ $t("learn-more") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
// import { useDisplay } from "vuetify"
// const { smAndUp } = useDisplay()
// const localePath = useLocalePath()
const props = defineProps({
  action: {
    type: Array,
    required: true,
  },
})
</script>
<style lang="scss"></style>
