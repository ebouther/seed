<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <PageView />
      <form>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="fr">fr</option>
        </select>
        <p>{{ $t("foo") }}</p>
      </form>
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
</script>
