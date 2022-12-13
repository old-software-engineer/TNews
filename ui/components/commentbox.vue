<template>
  <div class="flex items-start space-x-4">
    <div class="flex-shrink-0">
      <img class="inline-block h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="" />
    </div>
    <div class="min-w-0 flex-1">
      <form action="#">
        <div class="border-b border-gray-200 focus-within:border-indigo-600">
          <label for="comment" class="sr-only">Add your comment</label>
          <textarea rows="3" name="comment" id="comment"
            class="block w-full resize-none border-0 border-b border-transparent p-0 pb-2  lead mt-3 text-base text-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Add your comment..." />
        </div>
        <div class="flex justify-end pt-2">
          <button type="submit"
            class="inline-flex items-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Post</button>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { FaceSmileIcon as FaceSmileIconOutline, PaperClipIcon } from '@heroicons/vue/24/outline'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { FaceFrownIcon, FaceSmileIcon as FaceSmileIconMini, FireIcon, HandThumbUpIcon, HeartIcon, XMarkIcon, } from '@heroicons/vue/20/solid'
</script>