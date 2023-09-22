<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, index) in featured"
      :key="index"
      :src="item.picture"
      cover
    >
      <v-card
        :color="item.color"
        class="d-flex pa-6 flex-column justify-space-between align-start w-50 ml-16 mt-16 h-33"
      >
        <div class="text-h4">
          {{ item.title }}
        </div>
        <v-btn color="success" class="mt-6 ml-auto" :href="item.link">{{
          $t("check-this-out")
        }}</v-btn>
      </v-card></v-carousel-item
    >
  </v-carousel>
</template>
<script setup>
const props = defineProps({
  featured: {
    type: Array,
    required: true,
  },
})
</script>
