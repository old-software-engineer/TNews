<template>
  <div>
    <Navbar :path="path" />
    <div class="mt-10">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import { storeToRefs, mapActions } from 'pinia'
import { useAuthStore } from '~~/store'
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
const { setUser } = mapActions(useAuthStore, ['setUser'])
export default {
  data () {
    const route = useRoute()
    const routeName = route.path
    return {
      path: routeName,
      user,
      setUser
    }
  },

  watch: {
    $route (newPath) {
      this.path = newPath.fullPath
    }
  },
  mounted () {
    if (!this.user) {
      localStorage.getItem('user') ? this.setUser(JSON.parse(localStorage.getItem('user'))) : navigateTo('/login')
    }
  }
}
</script>
