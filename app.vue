<template>
  <Transition name="layout" mode="out-in">
    <div :key="$route.meta.layout">
      <NuxtLayout>
        <Transition name="page" mode="out-in">
          <div :key="$route.fullPath">
            <NuxtPage />
          </div>
        </Transition>
      </NuxtLayout>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
const { $i18n } = useNuxtApp()
const config = useAppConfig()
useHead({
  // as a string,
  // where `%s` is replaced with the title
  // of the current page
  title: "Welcome ",
  titleTemplate: `%s - ${$i18n.t(config.name)}`,
})
</script>
