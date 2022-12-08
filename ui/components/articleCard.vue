<template>
    <div v-for="post in posts" :key="post.title">
          <div>

          </div>
          <a href="#" class="mt-4 block">
            <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
            <p class="mt-3 text-base text-gray-500">{{ post.description }}</p>
          </a>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a :href="post.author.href">
                <span class="sr-only">{{ post.author.name }}</span>
                <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" alt="" />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a href="#">{{ post.author.name }}</a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time :datetime="post.datetime">{{ post.date }}</time>

                <span>No. of likes</span>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  props: ['posts'],
}
</script>
