<template>
  <div class="container-float">

  <div class="row">

    <div
    v-for="article in AllArticles"
    :key="article"
    class="col col-12 col-sm-4 col-md-3">

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
