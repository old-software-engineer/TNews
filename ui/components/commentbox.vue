<template>
  <div class="flex items-start space-x-4">
    <div class="flex-shrink-0">
      <Avatar :userName="userName" />
    </div>
    <div class="min-w-0 flex-1">
      <form ref="form" @submit.prevent="createComment">
        <div class="border-b border-gray-200 focus-within:border-indigo-600">
          <label for="comment" class="sr-only">Add your comment</label>
          <textarea rows="3" name="comment" id="comment" v-model="comment" required
            class="block p-2 w-full resize-none border-0 border-b border-transparent  pb-2  lead mt-3 text-base text-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Add your comment..." />
        </div>
        <div class="flex justify-end pt-2">
          <button
            class="inline-flex items-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Post</button>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      comment: ""
    }
  },
  methods: {
    async createComment() {
      const comment = await fetch("http://localhost:3000/comments/create", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          comment: this.comment,
          article_id: this.article_id,
          user_id: this.user_id
        })
      })
      const res = await comment.json()
      this.getArticle()
      this.$refs.form.reset()
    }
  },
  props: ['article_id', 'user_id', 'userName', 'getArticle']
}
</script>