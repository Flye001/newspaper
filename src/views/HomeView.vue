<template>
  <div class="container px-3 mx-auto mt-3">

    <div class="text-center">

      <h1 class="text-3xl">Welcome to the Aston Digest!</h1>

      <p>We are a student run newspaper from King Edward Aston school, founded in 2022. We cover everything from world events, Science, and local School news; and all our articles are written by students, we allow any student to submit articles.</p>

      <p class="py-5">Why not read our latest article:</p>

      <ArticleCard
      :Article="AllArticles[0]"></ArticleCard>

      <p class="py-5">Or view <router-link to="/articles" class="font-bold">all articles</router-link>.</p>

    </div>

  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'
import ArticlesFile from '@/articles.json'

export default {
  components: {
    ArticleCard
  },
  data () {
    return {
      AllArticles: ArticlesFile.Articles
    }
  }
}
</script>
