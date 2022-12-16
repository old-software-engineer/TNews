<template>
  <div>
    <a href="#" class="mt-4 block">
      <div class="flex flex-row justify-between">
        <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
        <Menu v-if="path == '/myarticles'" as="div" class="relative mx-3 inline-block text-left">
          <div>
            <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-500 hover:text-gray-900">
              <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true" />
            </MenuButton>
          </div>
          <transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
              class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-1">
                <MenuItem>
                <span @click="editArticle" class="text-gray-500 block px-4 py-2 text-sm">Edit Article</span>
                </MenuItem>
                <MenuItem>
                <span @click="deleteArticle" class="text-gray-500 block px-4 py-2 text-sm">Delete Article</span>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <p style="-webkit-mask-image:linear-gradient(0deg, rgba(255, 255, 255, 0) 11.2%, #FFFFFF 93.91%)"
        class="mt-3 text-base h-32  text-gray-500">{{ post.description }}</p>
      <NuxtLink @click="showArticle" class="text-gray-500 border-b-2 border-gray-300">Click To Continue Reading
      </NuxtLink>
    </a>
    <div class="mt-6 flex items-center">
      <div class="flex-shrink-0">
        <a>
          <span class="sr-only">{{ post.user_name }}</span>
          <avatar :userName="post.user_name" />
        </a>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">
          <a>{{ post.user_name }}</a>
        </p>
        <div class="flex space-x-1 text-sm text-gray-500">
          <time>{{ formattedDate(new Date(post.created_at)) }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, TransitionChild, TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/vue/20/solid'

</script>
<script>
export default {
  props: ['post'],
  data() {
    const route = useRoute()
    const routeName = route.path
    return {
      path: routeName
    }
  },
  methods: {
    showArticle() {
      navigateTo(`/articles/${this.post.id}`)
    },
    editArticle() {
      console.log("Inside Edit Article")
      navigateTo(`/editarticle/${this.post.id}`)
    },
    async deleteArticle() {
      const deleteArticle = await fetch(`http://localhost:3000/articles/delete/${this.post.id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "Authorization": localStorage.token
        }
      })
      const res = await deleteArticle.json()
      console.log(res)
    },
    timeSince(date) {
      let seconds = Math.floor((+new Date() - +date) / 1000);

      let interval = seconds / 31536000;

      if (interval > 1) {
        return Math.floor(interval) + ' years ago';
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + ' months ago';
      }
      interval = seconds / 86400;
      if (interval >= 2) {
        return Math.floor(interval) + ' days ago';
      } else if (interval > 1 && interval < 2) {
        return '1 day ago';
      }
      return 'Today';
    },

    formattedDate(date) {

      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}(${this.timeSince(date)})`;
    }

  },
}
</script>
