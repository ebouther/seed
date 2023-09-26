<template>
  <v-text-field
    v-model="val"
    v-bind="$attrs"
  ></v-text-field>
</template>
<script setup>
import { useRootStore } from "~/store/root"
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
    console.log('props.level: ', props.level);
    
    rootStore.updateForm({
      key: props.args.key,
      value,
      type: props.args.type,
      level: props.level,
    })
  },
})
onMounted(() => {
  console.log("ARGS", props.args)
})
</script>
<style lang="scss"></style>
