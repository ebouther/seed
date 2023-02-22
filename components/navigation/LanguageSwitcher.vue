<template>
  
  <select class="">
    <option :selected="$i18n.locale === 'fr'">{{ $t("french") }}</option>
    <option :selected="$i18n.locale === 'en'">{{ $t("english") }}</option>
  </select>
</template>
<script setup>
/* import { useRootStore } from '~/store/root';

const rootStore = useRootStore(); */
</script>
<style lang="scss"></style>
