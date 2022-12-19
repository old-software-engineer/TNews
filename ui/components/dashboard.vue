<template>
  <div>
    <Articles :get-sorted-articles="getSortedArticles" :heading="heading" :posts="articles" />
  </div>
</template>

<script>

export default {
  data () {
    const heading = 'All publications'
    return {
      articles: [],
      heading
    }
  },
  created () {
    this.getArticles()
  },
  methods: {
    async getArticles () {
      const articles = await fetch('http://localhost:3000/articles/all')
      this.articles = await articles.json()
    },

    async getSortedArticles (type) {
      const article = await fetch('http://localhost:3000/articles/all?' + new URLSearchParams({ date_order: type }))
      this.articles = await article.json()
    }

  }
}
</script>
