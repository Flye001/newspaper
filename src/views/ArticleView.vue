<template>
  <div class="container mx-auto text-left p-5 md:outline md:outline-1 md:outline-gray-300 mb-5">
    <h1 class="text-sm italic">{{ Author }}</h1>
    <h3 class="text-3xl my-2 sm:my-5 text-center md:text-left">{{ Title }}</h3>
    <div v-html="ArticleHTML" class="article-body"></div>
  </div>

</template>

<style>
p {
  @apply my-3 !important
}
h5 {
  @apply font-bold my-5 text-xl !important
}
li {
  list-style-type: disc;
  @apply ml-2 my-2
}
img {
  @apply mx-auto
}
</style>

<script>
export default {
  props: ['Title', 'Author', 'Id'],
  data () {
    return {
      ArticleHTML: ''
    }
  },
  beforeMount: function () {
    // console.log(this.Id)
    // import article from `@/articles/${this.Id}.html`
    fetch(`/articles/${this.Id}.html`)
      .then(response => response.text())
      .then(text => {
        this.ArticleHTML = text
      })
  }
}
</script>
