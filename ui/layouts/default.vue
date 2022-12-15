<template>
    <div>
        <Navbar :path="path" />

        <div v-if="user != null" class="mt-10">
            <slot />
        </div>
        <NuxtLink v-else>{{ navigateTo('/login') }}</NuxtLink>
        <Footer />
    </div>

</template>
        

<script>
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });
import { mapGetters } from "vuex";
import { mapActions, storeToRefs } from "pinia";
import { userStore } from "../store/user"
const main = userStore();
const { user } = storeToRefs(main);
const { setUser } = mapActions(userStore, ["setUser"])

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
            user: user,
        }
    },
}
</script>



