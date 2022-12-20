<template>
  <div>
    <Articles :heading="category" :posts="categoryArticles" :get-sorted-articles="getSortedArticles" />
  </div>
</template>

<script>
export default {
  data () {
    const config = useRuntimeConfig()
    const route = useRoute()
    const routeName = route.path.split('/')[1]
    const categoryId = route.path.split('/')[2]
    return {
      category: routeName,
      categoryId,
      categoryArticles: [],
      config
    }
  },
  created () {
    this.getArticlesByCategory()
  },
  methods: {
    async getArticlesByCategory () {
      const articles = await fetch(`${this.config.public.baseUrl}/articles/category/${this.categoryId}`)
      this.categoryArticles = await articles.json([])
    },
    async getSortedArticles (type) {
      const article = await fetch(`${this.config.public.baseUrl}/articles/category/${this.categoryId}?` + new URLSearchParams({ date_order: type }))
      this.categoryArticles = await article.json()
    }
  }
}
</script>
