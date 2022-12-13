<template>
    <div class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-15 lg:pb-28">
        <div class="relative mx-auto max-w-lg lg:max-w-7xl">
            <div class="h-full flex justify-center">
                <div class="w-1/2 mt-5 md:mt-0 md:col-span-2">
                    <h2 class="mt-6 mb-9 text-3xl font-bold tracking-tight text-gray-900">
                        Create New Article
                    </h2>
                    <form action="#" method="POST">
                        <div class="shadow sm:rounded-md  sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div class="grid grid-cols-3 gap-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <label for="articleTitle" class="block text-xl font-semibold text-gray-900">
                                            Article Title
                                        </label>
                                        <div class=" mt-3 flex rounded-md shadow-sm">
                                            <input type="text" id="articleTitle"
                                                class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-2.5"
                                                placeholder="Title of your Article" required>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label for="about" class="block text-xl font-semibold text-gray-900">
                                        About
                                    </label>
                                    <div class="mt-3">
                                        <textarea id="about" rows="4"
                                            class="block p-2.5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Description of your article"></textarea>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <input checked id="checked-checkbox" type="checkbox" value="true"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300">
                                    <label for="checked-checkbox"
                                        class="ml-2 block text-l font-semibold text-gray-900">Public</label>
                                </div>

                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit"
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


}
</script>