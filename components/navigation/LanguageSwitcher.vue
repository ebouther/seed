<template>
  
  <select v-model="$i18n.locale">
    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
  </select>
</template>
<script setup>
/* import { useRootStore } from '~/store/root';

const rootStore = useRootStore(); */
</script>
<style lang="scss"></style>
