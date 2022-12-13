<template>
    <div class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-15 lg:pb-28">
        <div class="relative mx-auto max-w-lg lg:max-w-7xl">
            <div class="h-full flex justify-center">
                <div class="w-full md:w-3/5 p-8 bg-white  shadow-md">
                    <span class="text-xl font-semibold block"> Change Password</span>
                    <div class="rounded  shadow p-6">
                        <div class="pb-4">
                            <label for="oldPassword" class="font-semibold text-gray-700 block pb-1">Old Password</label>
                            <input id="oldPassword" class="border border-gray-300   rounded-r px-4 py-2 w-full"
                                type="password" value="" />
                        </div>
                        <div class="pb-4">
                            <label for="newPassword" class="font-semibold text-gray-700 block pb-1">New Password</label>
                            <input id="newPassword" class="border border-gray-300   rounded-r px-4 py-2 w-full"
                                type="password" value="" />
                        </div>
                        <div class="pb-4">
                            <label for="confirmPassword" class="font-semibold text-gray-700 block pb-1">Confirm
                                Password</label>
                            <input id="confirmPassword" class="border border-gray-300   rounded-r px-4 py-2 w-full"
                                type="password" value="" />
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
s
<script>
export default {
}
</script>