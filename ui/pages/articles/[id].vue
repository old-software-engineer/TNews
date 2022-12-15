<template>
    <div>
        <Article :articleId="articleId" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            articleId: null
        }
    },
    created() {
        const route = useRoute();
        this.articleId = route.params.id
    }

}
</script>