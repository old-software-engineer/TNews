<template>
  <div class=" flex flex-row w-full mt-8   mr-3 text-sm text-gray-900 dark:text-white">
    <div class="mr-4">
      <Avatar :userName="comment.user_name" />
    </div>
    <div class="w-full">
      <div class="flex justify-between align-middle">
        <div><a href="#" rel="author" class="font-bold text-lg text-gray-900 dark:text-white">{{
            comment.user_name
        }} <span class='ml-2 text-base text-gray-500'>says</span> </a></div>
        <div class="text-sm text-gray-500 mr-6 flex items-center"><time>{{ formattedDate(new Date(comment.created_at))
        }}</time></div>
      </div>
      <div class="mt-3">
        <p class="lead mt-3 text-base text-gray-500">{{ comment.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from './avatar.vue'
export default {
  components: { avatar },
  props: ['comment'],
  methods: {
    timeSince(date) {
      let seconds = Math.floor((+new Date() - +date) / 1000);

      let interval = seconds / 31536000;

      if (interval > 1) {
        return Math.floor(interval) + ' years ago';
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + ' months ago';
      }
      interval = seconds / 86400;
      if (interval >= 2) {
        return Math.floor(interval) + ' days ago';
      } else if (interval > 1 && interval < 2) {
        return '1 day ago';
      }
      return 'Today';
    },

    formattedDate(date) {

      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}(${this.timeSince(date)})`;
    }
  }
}
</script>
