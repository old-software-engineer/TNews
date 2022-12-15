<template>
    <div>
        <Navbar :path="path" />

        <div v-if="user != null" class="mt-10">
            <slot />
        </div>
        <div v-else class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-15 lg:pb-28">
            <div class="relative mx-auto max-w-lg lg:max-w-7xl">
                <div class="h-full flex justify-center">
                    <div class="w-1/2 mt-5 md:mt-0 md:col-span-2">
                        <h2 class="mt-6 mb-9 text-3xl font-bold tracking-tight text-gray-900">
                            Please <NuxtLink href="/login" class="border-b-2 border-black hover:cursor-pointer">Login
                            </NuxtLink> TO Read Articles
                        </h2>

                    </div>
                </div>
            </div>
        </div>
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
            // toaster: toaster
        }
    },
    methods: {
        validateForm() {
            toaster.show(`${this.notification}`);
        }
    },
    computed: {
        ...mapGetters(['notification'])
    }
}
</script>



