<template>
    GRID DISPLAY
    <template v-for="(item, index) in items" :key="index">
      <slot name="data" :item="item"> </slot>
    </template>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    items: [Object],
    type: String,
  })
  </script>
  