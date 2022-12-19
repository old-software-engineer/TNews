<template>
  <div>
    <div class="mt-12 text-center">
      <h2 class="text-3xl capitalize font-bold tracking-tight text-gray-900 sm:text-4xl">
        {{ heading }}
      </h2>
    </div>
    <div class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-15 lg:pb-28">
      <div class="relative mx-auto max-w-lg lg:max-w-7xl">
        <div class="flex justify-end space-x-5">
          <div class="flex items-center">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="group inline-flex justify-center text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  Sort
                  <ChevronDownIcon
                    class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem>
                      <span
                        class="text-gray-500 block px-4 py-2 text-sm hover:cursor-pointer"
                        @click="getSortedArticles('desc')"
                      >Latest</span>
                    </MenuItem>
                    <MenuItem>
                      <a
                        class="text-gray-500 block px-4 py-2 text-sm hover:cursor-pointer"
                        @click="getSortedArticles('asc')"
                      >Oldest</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
        <div class="grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          <ArticleCard v-for="article in articles" :key="article.id" :post="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

</script>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default () {
        return []
      }
    },
    heading: {
      type: String,
      default () {
        return ''
      }
    },
    getSortedArticles: {
      type: Function,
      default () {
        return () => {}
      }
    }
  },
  data () {
    const route = useRoute()
    const routeName = route.path
    return {
      categories: [],
      path: routeName,
      articles: []
    }
  },
  watch: {
    posts () {
      this.articles = this.posts
    }
  },
  created () {
    this.getCategories()
  },
  methods: {
    async getCategories () {
      const categories = await fetch('http://localhost:3000/categories/all')
      this.categories = await categories.json()
    },
    handleClick (categoryName, categoryId) {
      navigateTo(`/${categoryName.toLowerCase()}/${categoryId}`)
    }
  }
}
</script>
