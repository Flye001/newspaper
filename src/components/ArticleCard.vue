<template>
    <!-- <div class="flex flex-col bg-slate-400 p-1 mb-3 mx-2">
        <img :src="Article.ImageURL" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ Article.Title }}</h5>
            <p class="card-text">{{ Article.Description }}</p>
            <p class="card-text"><small class="text-muted">{{ Article.Author }}</small></p>
            <a class="btn btn-sm btn-primary" @click="LoadArticle">Read More</a>
        </div>
    </div> -->
    <div class="flex flex-col md:flex-row gap-5 outline outline-1 outline-gray-300 cursor-pointer" @click="LoadArticle">
      <img :src="Article.ImageURL" class="w-1/2 min-w-0 max-w-full h-min my-auto">
      <div class="flex flex-col text-left mt-5 p-1">
        <h1 class="text-sm italic">{{ Article.Author }}</h1>
        <h1 class="text-xs italic">{{ Article.Date }}</h1>

        <h1 class="text-2xl">{{ Article.Title }}</h1>
        <p class="mt-3">{{ Article.Description }}</p>

        <h1 class="text-sm mt-auto">Category: <span class="italic">{{ Article.Category }}</span></h1>
      </div>
    </div>
</template>

<script>
export default {
  props: ['Article'],
  methods: {
    LoadArticle () {
      // console.log(this.Article)
      this.$router.push({
        name: 'article',
        params: {
          Title: this.Article.Title,
          Id: this.Article.Id
          // HTML: this.Article.ArticleHTML
        }
      })
    }
  }
}
</script>
