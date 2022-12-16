<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Register new account
      </h2>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form @submit.prevent="validateForm" class="space-y-6" action="#" method="POST">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <div class="mt-1">
              <input id="userName" type="text" v-model="name" required
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" />
            </div>
          </div>
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
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div class="mt-1">
              <input id="pconfirmPassword" type="password" autocomplete="current-password" required
                v-model="confirmPassword"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm" />
            </div>
          </div>
          <div>
            <button
              class="flex w-full justify-center rounded-md border border-transparent  bg-gray-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              Sign in
            </button>
          </div>
          <div class="mt-8 text-center">
            <NuxtLink to="/login" class="font-medium text-gray-800 hover:text-gray-500">Login here</NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    validateForm() {
      let incorrectInput = '';
      if (this.name.length < 5) {
        incorrectInput += "Name should be atleast six letters long!.\n"
      }
      if (this.password < 6) {
        incorrectInput += "Password should be atleat 6 characters!\n"
      }
      if (this.password != this.confirmPassword) {
        incorrectInput += "Password does not match!\n"
        toaster.show(incorrectInput)
      }
      else {
        this.createUser()
      }

    },
    createUser() {

      axios.post('http://localhost:3000/user/register',
        {
          name: this.name,
          email: this.email,
          password: this.password
        }
      ).then(res => {
        navigateTo('/login')
      }).catch(e => toaster.show("User already exists!"))
    }


  },

}
</script>