<template>
  <div>
    <v-layout>
      <Header />
      <v-main class="content h-50"><slot /></v-main>
      <Footer />
    </v-layout>
  </div>
</template>
<style lang="scss" scoped>
.content {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
