<template>
    <v-sheet
      class="mx-auto"
      elevation="8"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        selected-class="bg-primary"
        show-arrows
      >
        <v-slide-group-item
          v-for="n in 15"
          :key="n"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
            :color="isSelected ? 'grey':'grey-lighten-1'"
            :class="['ma-4', selectedClass]"
            height="200"
            width="100"
            @click="toggle"
          >
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon
                  v-if="isSelected"
                  color="white"
                  size="48"
                  icon="mdi-close-circle-outline"
                ></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
  
      <v-expand-transition>
        <v-sheet
          v-if="model != null"
          height="100%"
          width="100%"
        >
          <slot></slot>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </template>
  <script setup>

  const model = ref(0)
</script>