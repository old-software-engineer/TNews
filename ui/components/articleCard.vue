<template>
  <div>
    <a href="#" class="mt-4 block">
      <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
      <p style="-webkit-mask-image:linear-gradient(0deg, rgba(255, 255, 255, 0) 11.2%, #FFFFFF 93.91%)"
        class="mt-3 text-base h-32  text-gray-500">{{ post.description }}</p>
      <span class="text-gray-500 border-b-2 border-gray-300">Click To Continue Reading</span>
    </a>
    <div class="mt-6 flex items-center">
      <div class="flex-shrink-0">
        <a>
          <span class="sr-only">{{ post.user_name }}</span>
          <img class="h-10 w-10 rounded-full"
            src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt="" />
        </a>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">
          <a href="#">{{ post.user_name }}</a>
        </p>
        <div class="flex space-x-1 text-sm text-gray-500">
          <time>{{ post.created_at }}</time>
          <span>No. of likes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>
