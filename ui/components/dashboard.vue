<template>
    <div>
        <Articles :heading="heading" :posts="articles" />
    </div>
</template>

<script>
export default {
    data() {
        const heading = {
            title: "All publications",
            description: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
        }
        return {
            articles: [],
            heading
        }
    },
    methods: {
        async getArticles() {
            const articles = await fetch("http://localhost:3000/articles/all");
            this.articles = await articles.json();
        }
    },
    created() {
        this.getArticles();
    }
}
</script>

