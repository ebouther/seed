<template>
  <v-menu offset-y open-on-hover bottom>
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" class="" text x-large v-on="on">
        {{ $i18n.locale.toUpperCase() }}
        <v-icon right>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        <v-list-item>
          <v-list-item-title class="text-uppercase text-button">
            {{ $t("english") }}
          </v-list-item-title>
        </v-list-item></NuxtLink
      >
    </v-list>
  </v-menu>
</template>
<script setup>
/* import { useRootStore } from '~/store/root';

const rootStore = useRootStore(); */
</script>
<style lang="scss"></style>
<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>
