<template>
    <div class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
                <header class="mb-4 lg:mb-6 not-format">
                    <address class="flex items-center mb-6 not-italic">
                        <div class="w-full  inline-flex items-center mr-3 text-sm text-gray-900">
                            <!-- <img class="mr-4 w-16 h-16 rounded-full"
                                src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                alt="Jese Leos"> -->
                            <div class="mr-4">
                                <Avatar :userName="user.name" />
                            </div>
                            <div class="w-full flex justify-between">
                                <div>
                                    <a href="#" rel="author" class="text-xl font-bold text-gray-900">{{
                                            article.title
                                    }}</a>
                                    <div class="flex space-x-1 text-sm text-gray-500">
                                        <time>{{ formattedDate(new Date(article.created_at)) }}</time>
                                    </div>
                                </div>
                                <div class="mr-4">
                                    <Likebutton @click="changeReaction" :currentUserReaction="reaction" />
                                    <span class="flex mt-2 text-sm text-gray-500">Liked by <p
                                            class="text-gray-900 font-medium mx-1">{{ article.likesCount }}</p>
                                        People</span>
                                </div>
                            </div>
                        </div>
                    </address>
                    <h1
                        class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                        {{ article.title }}</h1>
                </header>
                <p class="lead mt-3 text-base text-gray-500">
                    {{ article.description }}
                </p>
                <div class="my-7">
                    <span class="text-xl font-bold text-gray-900">Comments</span>
                    <ShowComment v-for="comment in comments" :key="comment.id" :comment="comment" />
                </div>
                <div class="flex flex-col space-y-6">
                    <span class="text-xl font-bold text-gray-900">Leave a Comment</span>
                    <commentbox :article_id="article.id" :user_id="user.id" :userName="user.name" />
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import { mapActions, storeToRefs } from "pinia";
import { userStore } from "../store/user"
const main = userStore();
const { user } = storeToRefs(main);
export default {
    props: ['articleId'],
    data() {
        const route = useRoute()
        const routeName = route.path
        const article = {}
        const comments = []


        return {
            path: routeName,
            article: article,
            user: user,
            comments: comments,
            reaction: ''
        }
    },
    methods: {
        async getArticle() {
            const article = await fetch(`http://localhost:3000/articles/details/${this.articleId}`, {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    user_id: this.user.id
                })
            });
            this.article = await article.json();
            console.log(this.article)
            this.reaction = this.article.current_user_reaction
            const comments = await fetch(`http://localhost:3000/comments/article/${this.article.id}`, {
                headers: {
                    "content-type": "application/json"
                }
            })
            this.comments = await comments.json();
        },
        async changeReaction() {
            const reaction = await fetch("http://localhost:3000/reactions/change-reaction",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        reaction: `${this.reaction ? '' : 'like'}`,
                        user_id: this.user.id,
                        article_id: this.article.id
                    })
                }
            )
            const res = await reaction.json()
            console.log(res)
            this.getArticle();
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
    mounted() {
        this.getArticle();
    }
}
</script>
