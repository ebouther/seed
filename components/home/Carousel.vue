<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, index) in queryContent('/' + $i18n.locale + '/carousel').find()"
      :key="index"
      :src="item.picture"
      cover
      :to="item.link"
    >
      <div class="d-flex fill-height justify-center align-center">
        <div class="text-h2">
          {{ item.text }}
        </div>
      </div></v-carousel-item
    >
  </v-carousel>
</template>
<script setup>
const {$i18n} = useNuxtApp();
console.log('/' + $i18n.locale.toString() + '/carousel');
console.log($i18n.locale);
const { data: featured } = await useAsyncData('featured-list', () => queryContent('/' + $i18n.locale + '/carousel').find()) 
console.log('featured: ', featured);
</script>
