<template>
  <h1>Rows VIEW</h1>
  <v-row>
      <slot>
    <!-- fallback content -->
    Rows view 
  </slot>
  </v-row>
 
</template>

<script setup lang="ts">
/* const { signIn } = useSession() */
onMounted(() => {
  console.log("loading rows");
})
</script>
