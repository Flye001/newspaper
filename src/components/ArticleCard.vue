<template>
    <div class="card mb-3 mx-2">
        <img :src="Article.ImageURL" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ Article.Title }}</h5>
            <p class="card-text">{{ Article.Description }}</p>
            <p class="card-text"><small class="text-muted">{{ Article.Author }}</small></p>
            <a class="btn btn-sm btn-primary" @click="LoadArticle">Read More</a>
        </div>
    </div>
</template>

<script>
export default {
  props: ['Article'],
  methods: {
    LoadArticle () {
      console.log(this.Article)
      this.$router.push({
        name: 'article',
        params: {
          Title: this.Article.Title,
          HTML: this.Article.ArticleHTML
        }
      })
    }
  }
}
</script>
