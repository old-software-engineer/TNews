import { defineStore } from 'pinia'

export const useAuthStore = defineStore('main', {
  state: () => ({
    user: {}
  }),
  actions: {
    setUser (data) {
      this.user = data
    }
  }
})
