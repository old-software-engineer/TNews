<template>
  <div>
    <Articles :heading="heading" :posts="articles" :get-sorted-articles="getSortedArticles" :get-articles="getArticles" />
    <div class="flex justify-center ">
      <NuxtLink
        href="/createarticle"
        class="flex mb-14  justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Create New Article
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const config = useRuntimeConfig()
    const heading = 'My publications'
    return {
      articles: [],
      heading,
      config
    }
  },
  created () {
    this.getArticles()
  },
  methods: {
    async getArticles () {
      const articles = await fetch(`${this.config.public.baseUrl}/articles/user`, {
        headers: {
          Authorization: localStorage.token
        }
      })
      this.articles = await articles.json()
    },
    async getSortedArticles (type = 'asc', accessType) {
      const article = await fetch(`${this.config.public.baseUrl}/articles/user?` + new URLSearchParams({ date_order: type, access_type: accessType }), {
        headers: {
          Authorization: localStorage.token
        }
      })
      this.articles = await article.json()
    }
  }
}
</script>
