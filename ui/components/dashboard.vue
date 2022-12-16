<template>
    <div>
        <Articles :heading="heading" :posts="articles" />
    </div>
</template>

<script>
export default {
    data() {
        const heading = "All publications"
        return {
            articles: [],
            heading,
        }
    },
    methods: {
        async getArticles() {
            const articles = await fetch("http://localhost:3000/articles/all");
            this.articles = await articles.json();
        },
    },
    created() {
        this.getArticles();
    }
}
</script>

