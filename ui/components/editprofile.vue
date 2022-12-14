<template>
  <div class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-15 lg:pb-28">
    <div class="relative mx-auto max-w-lg lg:max-w-7xl">
      <div class="h-full flex justify-center">
        <div class="w-full md:w-3/5 p-8 bg-white  shadow-md">
          <span class="text-xl font-semibold block"> Edit Your Profile</span>
          <div class="rounded  shadow p-6">
            <div class="pb-6">
              <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>
              <div class="flex">
                <input id="username" required v-model="name" class="rounded-r border border-gray-300  px-4 py-2 w-full"
                  type="text" placeholder="Entere name" />
              </div>
            </div>
            <div class="pb-4">
              <label for="email" class="font-semibold text-gray-700 block pb-1">Email</label>
              <input id="email" required v-model="email" class="border border-gray-300   rounded-r px-4 py-2 w-full"
                type="email" placeholder="Enter Email" />
            </div>
            <div class="flex justify-end">
              <span @click="editProfile" href="#"
                class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Save</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
    };
  },
  methods: {
    async editProfile() {
      const user = await fetch("http://localhost:3000/user/update",
        {
          method: "PUT",
          headers: {
            "Authorization": localStorage.token
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email
          })
        })
      const res = await user.json()
      console.log(res)
      this.setUser(res.user);
      this.$router.push('/')
    }
  }
}
</script>