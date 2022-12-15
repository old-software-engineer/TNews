<template>
    <div class="bg-blue-200   text-gray-900"> {{getInitialLetters(userName)}}</div>
</template>

<script>
export default {
    data() {
return {
}
    },
    methods: {
     getInitialLetters(userName) {
  const matches = userName.match(/\b(\w)/g);
  return  matches.join('').substring(0, 2)
    }},
    props: ['userName']
}
</script>