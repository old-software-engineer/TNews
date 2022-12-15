<template>
    <div class=" flex flex-row w-full mt-8   mr-3 text-sm text-gray-900 dark:text-white">
        <img class="mr-4 w-16 h-14 rounded-full"
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt="Jese Leos">
        <div class="w-full">
            <div class="flex justify-between align-middle">
                <div><a href="#" rel="author" class="font-bold text-lg text-gray-900 dark:text-white">{{
                        comment.user_name
                }} <span class='ml-2 text-base text-gray-500'>says</span> </a></div>
                <div class="text-sm text-gray-500 mr-6 flex items-center"><time>{{ comment.created_at }}</time></div>
            </div>
            <div class="mt-3">
                <p class="lead mt-3 text-base text-gray-500">{{ comment.comment }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['comment'],
}
</script>
