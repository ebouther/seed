<template>
  <v-sheet >
    {{ props.level }}
 
    <slot>
    </slot>

  </v-sheet>
</template>
<script setup >
// import { useDisplay } from "vuetify"
// const { smAndUp } = useDisplay()
// const localePath = useLocalePath()
import { useRootStore } from "~/store/root"
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
    required: false,
  },
})
</script>
<style lang="scss"></style>
