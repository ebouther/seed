<template>
    <v-file-input
      v-model="val"
      :accept="args.accept"
      :multiple="args.multiple || false"
    ></v-file-input><s></s>
  </template>
  <script setup>
  import { useRootStore } from "~/store/root"
  import { storeToRefs } from 'pinia'
  import { debounce } from "~/composables/debounce"
  const rootStore = useRootStore()
  const props = defineProps({
  args: {
    type: Object,
    required: true,
    default: () => {
      return {}
    },
  },
  level: {
    type: Array,
    required: true,
  },
})
  const val = computed({
    get() {
    return rootStore.getKey({key: props.args.key, level:props.level,  store:rootStore[props.args.type].form})
    },
    set(value) {
      rootStore.updateForm({
      key: props.args.key,
      value,
      type: props.args.type,
      level: props.level,
    })
    },
  })
  onMounted(() => {
    console.log(props.data)
  })
  </script>
  <style lang="scss"></style>
  