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
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });
import { mapActions, storeToRefs } from "pinia";


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
            path: routeName,
        }
    }
}
</script>



