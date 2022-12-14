<template>
    <div class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-15 lg:pb-28">
        <div class="relative mx-auto max-w-lg lg:max-w-7xl">
            <div class="h-full flex justify-center">
                <div class="w-1/2 mt-5 md:mt-0 md:col-span-2">
                    <h2 class="mt-6 mb-9 text-3xl font-bold tracking-tight text-gray-900">
                        Create New Category
                    </h2>
                    <form @submit.prevent="createNewCategory">
                        <div class="shadow sm:rounded-md  sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div class="grid grid-cols-3 gap-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <label for="articleTitle" class="block text-xl font-semibold text-gray-900">
                                            Category
                                        </label>
                                        <div class=" mt-3 flex rounded-md shadow-sm">
                                            <input type="text" id="articleTitle" v-model="category"
                                                class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-2.5"
                                                placeholder="Category name" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            category: '',
        };
    },
    methods: {
        async createNewCategory() {
            const category = await fetch("http://localhost:3000/categories/create",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        name: this.category,
                    })
                })
            const res = await category.json()
            console.log(res)
            this.$router.push('/categories')
        }
    }
}
</script>