<!-- 
Install the "flowbite-typography" NPM package to apply styles and format the article content: 

URL: https://flowbite.com/docs/components/typography/ 
-->
<template>

    <div class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article
                class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header class="mb-4 lg:mb-6 not-format">
                    <address class="flex items-center mb-6 not-italic">
                        <div class="w-full  inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                            <img class="mr-4 w-16 h-16 rounded-full" :src="post.author.imageUrl" alt="Jese Leos">
                            <div class="w-full flex justify-between">
                                <div>

                                    <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{{
                                            post.author.name
                                    }}</a>
                                    <div class="flex space-x-1 text-sm text-gray-500">
                                        <time :datetime="post.datetime">{{ post.date }}</time>
                                    </div>
                                </div>
                                <div class="mr-4">
                                    <likebutton />
                                    <span class="flex mt-2 text-sm text-gray-500">Liked by <p
                                            class="text-gray-900 font-medium mx-1">127</p> People</span>
                                </div>
                            </div>
                        </div>
                    </address>
                    <h1
                        class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                        {{ post.title }}</h1>
                </header>
                <p class="lead mt-3 text-base text-gray-500">
                    {{ post.description }}
                </p>
                <div>

                </div>
                <!-- comments section -->
                <div class="my-7">
                    <span class="text-xl font-bold text-gray-900">Comments</span>
                    <!-- ///////////////////////////////////////////// -->

                        <ShowComment v-for="comment in comments" :key="comment.name" :comment="comment" />
                    <!-- ///////////////////////////////////////////////////////////////////// -->
                </div>
                <div class="flex flex-col space-y-6">
                    <span class="text-xl font-bold text-gray-900">Leave a Comment</span>         
                    <commentbox />
                </div>

            </article>
        </div>
    </div>
</template>


<!-- <script setup   >

</script> -->
<script>
export default{
    
    data() {

        const post =
{
    title: 'Boost your conversion rate',
    description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eligendi repellat quo nesciunt at maiores, nemo atque inventore consequuntur, praesentium explicabo quam obcaecati, necessitatibus asperiores officia doloribus eaque cum. Distinctio dolorem non provident. Ipsum, magni esse fuga, hic possimus assumenda molestiae nostrum suscipit enim nulla tempore. Officiis dignissimos nam amet id officia? Quis nostrum a voluptatibus odio eveniet numquam magni quo aut exercitationem ea. In, unde. Animi accusamus consequatur rem! Aliquam sequi veritatis sint, corrupti, saepe aut blanditiis nesciunt tempora vero impedit quisquam nemo. Consectetur officiis corrupti unde illo fuga porro error harum eveniet laborum maiores labore deleniti et, magni nisi non earum veritatis reprehenderit iusto est minus assumenda provident. Maxime officiis debitis dolore recusandae nihil quibusdam mollitia voluptatum voluptatibus? Quibusdam saepe quae quia, numquam, reprehenderit dolor recusandae facere maxime quos corrupti quaerat deserunt impedit alias, corporis voluptates ut accusantium. Libero doloribus voluptates nesciunt perferendis sint placeat? Dolorem, in alias! Qui adipisci veritatis error aliquid. Corrupti obcaecati doloribus hic eveniet, velit sunt necessitatibus aspernatur facere voluptatibus dolore voluptate fugiat impedit eos ab soluta placeat libero! Rem fugit repudiandae ad illum eveniet dolorum ex iure repellat doloribus eligendi esse qui et sapiente similique doloremque ullam libero sequi ipsa accusantium, sint nemo quod in. Quod, unde. Magnam et beatae iure repudiandae! Quasi, voluptas? Officiis eveniet dolorum tenetur deleniti labore, qui veritatis! Velit, numquam aliquid in odit soluta voluptatum et! Odit cumque illum cum quam dicta ad rerum consectetur quia corrupti minima tempore, vitae animi? Qui obcaecati nam numquam dignissimos facere cupiditate cumque sed vel, laudantium, pariatur maiores debitis beatae nesciunt tempore, dolores hic. Ex temporibus itaque commodi aliquam maxime corrupti quae, vitae saepe quasi, iusto soluta. Neque magni sunt porro, aliquid culpa ad asperiores libero rerum nobis corrupti, vero perspiciatis delectus officia. Enim  ",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
        name: 'Paul York',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    comments: [{
        name: "Paul George",
        date: "Mar 16, 2020",
        message: "Do your best",
    },
    {
        name: "Paul George",
        date: "Mar 16, 2020",
        message: "Do your best",
    }]
    // readingTime: '6 min',
}
        return{
            post: post,
            comments: post.comments
        }
    }
}
</script>
