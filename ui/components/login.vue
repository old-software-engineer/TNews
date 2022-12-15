<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="loginUser" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input id="email" type="email" autocomplete="email" required v-model="email"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" />
            </div>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <input id="password" type="password" autocomplete="current-password" required v-model="password"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500" />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
          </div>
          <div>
            <button
              :class="['flex w-full justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 text-sm font-medium text-white shadow-sm', email && password ? 'hover:bg-gray-800' : '', 'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2']">
              Sign in
            </button>
          </div>
          <div class="mt-8 text-center">
            <NuxtLink to="/register" class="font-medium text-gray-800 hover:text-gray-500">Register new account
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, storeToRefs } from "pinia";
import { userStore } from "../store/user"
const main = userStore();
const { user } = storeToRefs(main);
const { setUser } = mapActions(userStore, ["setUser"])
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });
export default {
  data() {
    return {
      email: '',
      password: '',
      user: user,
      setUser: setUser
    };
  },

  methods: {
    async loginUser() {
      const user = await fetch("http://localhost:3000/user/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        })
      try {
        const res = await user.json()
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user))
        this.setUser(res.user);
        this.$router.push('/')
      } catch (e) {
        toaster.show("Invalid Email or Password")
      }
    }
  }
}
</script>

