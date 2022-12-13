<template>
  <div>
    <Articles :heading="heading" :posts="posts" />
    <div class="flex justify-center ">

      <NuxtLink href="/createarticle"
        class="flex  justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
        Create New Article
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const heading = {
      title: "My publications",
      description: "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
    }
    const posts = [
      {
        "id": 3,
        "title": "Third news article",
        "description": "Description of the article",
        "public_access": true,
        "category_id": 1,
        "user_id": 1,
        "created_at": "2022-12-08T13:48:42.568Z",
        "user_name": "Jessie",
        "email": "jessie@mail.com",
        "category_name": "Business"
      },
      {
        "id": 3,
        "title": "Third news article",
        "description": "Description of the article",
        "public_access": true,
        "category_id": 1,
        "user_id": 1,
        "created_at": "2022-12-08T13:48:42.568Z",
        "user_name": "Jessie",
        "email": "jessie@mail.com",
        "category_name": "Business"
      },
      {
        "id": 3,
        "title": "Third news article",
        "description": "Description of the article",
        "public_access": true,
        "category_id": 1,
        "user_id": 1,
        "created_at": "2022-12-08T13:48:42.568Z",
        "user_name": "Jessie",
        "email": "jessie@mail.com",
        "category_name": "Business"
      },

    ]
    return {
      posts: posts,
      heading: heading
    }
  }
}
</script>