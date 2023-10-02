<template>
  <h1>
    <span
      v-for="(word, index) in moto.split(' ')"
      :key="index"
      :style="
        'animation: fade-in 0.8s ' +
        (index / 10 + 0.1) +
        's forwards cubic-bezier(0.11, 0, 0.5, 0);'
      "
      >{{ word }}</span
    >
  </h1>
</template>
<script setup lang="ts">
// import { useDisplay } from "vuetify"
// const { smAndUp } = useDisplay()
// const localePath = useLocalePath()
const { $i18n } = useNuxtApp()
const { data: rst } = await useAsyncData("moto", () =>
  queryContent("/pages/" + $i18n.locale.value + "/moto").findOne()
)
const moto = ref(rst.value.description)
</script>
<style lang="scss" scoped>
h1 {
  font-family: "Montserrat Medium";
  max-width: 40ch;
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}
span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}
@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>
