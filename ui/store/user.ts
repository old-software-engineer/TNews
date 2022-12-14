import { defineStore } from "pinia";

export const userStore = defineStore("main", {
  state: () => ({
    user: null,
  }),
  getters: {
    getUser: (state) => {
      state;
    },
  },
  actions: {
    setUser(data) {
      this.user = data;
    },
  },
});
