<template>
    <div>
        <Articles :heading="category" :posts="categoryArticles" />
    </div>
</template>

<script>
export default {
    data() {
        const route = useRoute()
        const routeName = route.path.split('/')[1]
        const categoryId = route.path.split('/')[2]
        return {
            category: routeName,
            categoryId: categoryId,
            categoryArticles: [],

        }
    },
    methods: {
        async getArticlesByCategory() {
            const articles = await fetch(`http://localhost:3000/articles/category/${this.categoryId}`);
            this.categoryArticles = await articles.json([]);
        },
    },
    created() {
        this.getArticlesByCategory();
        
    }
}
</script>   