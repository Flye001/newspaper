<template>
  <div class="container px-3 mx-auto mt-3">

    <div class="text-center">

      <h1 class="text-3xl">Welcome to the Aston Digest!</h1>

      <p>Some about us text goes here...</p>

      <p class="py-5">Why not read out latest article:</p>

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
