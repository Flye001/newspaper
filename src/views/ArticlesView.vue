<template>
  <div class="container px-3 mx-auto">

    <div class="flex flex-wrap">

      <div
      v-for="article in AllArticles"
      :key="article"
      class="w-full my-2">

      <ArticleCard
      :Article="article"></ArticleCard>

      </div>

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
