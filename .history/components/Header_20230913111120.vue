<template>
  <v-app-bar
    v-scroll="handleScroll"
    :class="{ fixed: fixed }"
    class="header"
    fixed
    dense
    app
    height="auto"
  >
    <v-container>
      <div class="header-content">
        <nav class="nav-menu">
          <NuxtLink v-slot="{ navigate }" :to="$config.app.baseURL" custom>
            <NuxtImg src="/logo.png" :to="navigate" />
          </NuxtLink>
          <NuxtLink v-slot="{ navigate }" to="/about-us" custom>
            <v-btn variant="flat" @click="navigate" class="mr-1"
              >About Us
            </v-btn>
          </NuxtLink>
        </nav>
      </div>
    </v-container>
  </v-app-bar>
</template>
<script>
import { useAuth } from "~/composables/useAuth"
import { useUserStore } from "~/store/user"
export default defineComponent({
  setup() {
    const isLoggedIn = computed(useAuth)
    const loading = ref(false)
    const fixed = ref(false)
    const handleLogout = () => {
      loading.value = true

      setTimeout(() => {
        useUserStore().logout()
        loading.value = false
      }, 2000)
    }
    const handleScroll = () => {
      if (window.scrollY > 100) {
        fixed.value = true
      } else {
        fixed.value = false
      }
    }
    return {
      isLoggedIn,
      loading,
      handleLogout,
      handleScroll,
    }
  },
})
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-inline: 1rem;
}
.mr-1 {
  margin-right: 4rem;
}
</style>
<style lang="scss">
.animated {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
