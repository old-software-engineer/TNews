<template>
    <div>
        <Navbar :path="path" />
        <div class="mt-10">
            <slot />
        </div>
        <Footer />
    </div>
</template>
        

<script>
export default {
    watch: {
        $route(newPath, oldPath) {
            this.path = newPath.fullPath
        },
    },
    data() {
        const route = useRoute()
        const routeName = route.path
        return {
            path: routeName
        }
    },
}
</script>



