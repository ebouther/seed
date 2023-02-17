<template>
  <div>
    <Logos mb-6 />
    <a href="https://fgerfgerf.fgr/dfzefze"></a>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
      <p>{{ $t("foo") }}</p>
    </form>
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
<script setup>
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
