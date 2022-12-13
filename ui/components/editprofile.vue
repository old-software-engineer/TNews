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
                                <input id="username" class="rounded-r border border-gray-300  px-4 py-2 w-full"
                                    type="text" value="Jane Name" />
                            </div>
                        </div>
                        <div class="pb-4">
                            <label for="email" class="font-semibold text-gray-700 block pb-1">Email</label>
                            <input id="email" class="border border-gray-300   rounded-r px-4 py-2 w-full" type="email"
                                value="example@example.com" />
                        </div>
                        <div class="flex justify-end">
                            <a href="#"
                                class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Save</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>