<template>
    <div>
        <Navbar :path="path" />
        <div></div>
        <slot />
        <Footer />
    </div>
</template>
        

<script>
export default {
    watch: {
        $route(newPath, oldPath) {
            this.foo = newPath.fullPath

        },
    },
    data() {
        const route = useRoute()
        const routeName = route.path
        return {
            path: routeName
        }
    }
}
</script>



