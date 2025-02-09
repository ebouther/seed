<template>
  <v-container>
      <SortMenu :type="type"></SortMenu>
      <component :is="view">
        <component v-for="(item, index) in items" :item="item" :key="index"  
            :is="itemTemplate"></component>
          </component>
      <div class="text-center">
        <ListMoleculesPagination v-if="numberOfPages > 1" :type="type" color="black" large :current-page="page"
          :total-pages="numberOfPages" :page-padding="1" :page-gap="2" :hide-prev-next="false"></ListMoleculesPagination>
      </div>
  </v-container>
</template>
<script setup>
import { useRootStore } from "~/store/root"
import { useDisplay } from "vuetify"
const {
  name: nameDisplay,
  xs: isXsDisplay,
  mobile: isMobileDisplay,
  smAndUp,
  lgAndUp,
  smAndDown,
} = useDisplay()
const nuxtApp = useNuxtApp()
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
const rootStore = useRootStore()
const props = defineProps({
  addBtn: {
    type: Boolean,
    required: false,
    default: false,
  },
  type: {
    type: String,
    default: "",
    required: true,
  },
  layout: {
    type: Object,
    required: false,
    default: () => {
      return {
        cols: 12,
        xl: 12,
      }
    },
  },
  pagination: {
    type: Object,
    required: false,
    default: () => {
      return {}
    },
  },
  addButton: {
    type: Boolean,
    required: false,
    default: false,
  },
  items: [Object],
})


const show = ref(true)
const view = computed(() =>  resolveComponent(capitalize(rootStore[props.type].view)))
const itemTemplate = computed(() =>  resolveComponent((capitalize(props.type) + capitalize(rootStore[props.type].view)+ 'Item').toString()))
const route = useRoute()
const total = computed(() => rootStore[props.type].total)
const numberOfPages = computed(() => rootStore[props.type].numberOfPages)

const page = computed(() => +rootStore[props.type].page)

const sortBy = computed(() => rootStore[props.type].sortBy)

const sortDesc = computed(() =>
  rootStore[props.type].sortDesc[0] !== "asc" ? [false] : [true]
)

const filtersCount = computed(() => rootStore[props.type].filtersCount)

const items = computed(() => rootStore[props.type].items)

const itemsPerPage = computed({
  get() {
    return rootStore[props.type].itemsPerPage
  },
  set(value) {
    rootStore.updateItemsPerPage({ itemsPerPage: value, type: props.type })
    nuxtApp.$vuetify.goTo(0)
  },
})

const search = computed({
  get() {
    return rootStore[props.type].search
  },
  set(value) {
    debouncedSearch(value)
  },
})

const display = computed({
  get() {
    return rootStore[props.type].display
  },
  set(value) {
    rootStore.updateDisplay({ display: value, type: props.type })
    nuxtApp.$vuetify.goTo(0)
  },
})

onMounted(() => {
  const { type, source } = props

  rootStore.loadRouteQuery(type)

  const hasFilters =
    rootStore[type].filtersCount > 0 ||
    (route.query.filters && Object.keys(route.query.filters).length > 0) ||
    route.query?.search?.length > 0
  /* 
    filter.value = hasFilters */

  rootStore.update(type, source)
})

useFetch(async () => {
  rootStore.update(props.type)
})
</script>
