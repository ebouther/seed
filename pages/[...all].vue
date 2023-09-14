<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center flex-column">
        <div class="text-h1">404</div>
        <div class="text-h4">{{ $t("page-not-found") }}</div>
        <div>
          <v-btn class="ma-6" @click="router.back()">
         <v-icon left>mdi-chevron-left</v-icon>   {{ $t("back") }}
          </v-btn>
        </div></v-col
      >
    </v-row>
  </v-container>
</template>
