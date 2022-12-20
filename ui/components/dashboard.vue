<template>
  <div>
    <Articles :get-sorted-articles="getSortedArticles" :heading="heading" :posts="articles" />
  </div>
</template>

<script>
export default {
  data () {
    const config = useRuntimeConfig()
    const heading = 'All publications'
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
      const articles = await fetch(`${this.config.public.baseUrl}/articles/all`)
      this.articles = await articles.json()
    },

    async getSortedArticles (type) {
      const article = await fetch(`${this.config.public.baseUrl}/articles/all?` + new URLSearchParams({ date_order: type }))
      this.articles = await article.json()
    }

  }
}
</script>
