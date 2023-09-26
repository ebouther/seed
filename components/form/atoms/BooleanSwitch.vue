<template>
    <v-switch
      v-model="val"
    ></v-switch>
  </template>
  <script setup>
  import { useRootStore } from "~/store/root"
  import { debounce } from "~/composables/debounce"
  const rootStore = useRootStore()
  const props = defineProps({
    data: {
      type: Object,
      required: true,
      default: () => {
        return {}
      },
    },
  })
  const val = computed({
    get() {
      return rootStore[props.data.type].form[props.data.key]
    },
    set(value) {
      rootStore.updateForm({ key: props.data.key, value, type: props.data.type })
    },
  })
  onMounted(() => {
    console.log(props.data)
  })
  </script>
  <style lang="scss"></style>
  