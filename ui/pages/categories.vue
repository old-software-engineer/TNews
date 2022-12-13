<template>
    <div class="px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-15 lg:pb-28">
        <div class=" relative mx-auto max-w-lg lg:max-w-7xl">
            <div class="grid gap-16 pt-12 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-12">
                <div v-for="cat in cats" :key="cat" class="flex  justify-center h-30 w-60 ">
                    <div
                        class="flex items-center justify-center font- h-full w-full  p-6 rounded-lg shadow-lg bg-gray-700 hover:bg-gray-800 max-w-sm">
                        <h5 class="text-white text-xl leading-tight font-medium mb-2">{{ cat }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
export default {
    data() {
        const cats = ["Business", "Entertainment", "Fashion", "National", "International", "Sports"]
        return { cats: cats }
    }
}
</script>