<template>
  <v-radio-group>
    <v-radio
      v-for="(item, index) in data.items"
      :key="index"
      :value="item"
      @change="val = item"
      :label="$t(item)"
    ></v-radio>
  </v-radio-group>
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
