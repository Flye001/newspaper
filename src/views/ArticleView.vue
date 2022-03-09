<template>
  <h3>{{ Title }}</h3>
  <div v-html="HTML" class="article-body"></div>
</template>

<style scoped>
h3 {
  text-align: left;
}
.article-body {
  text-align: left;
}
</style>

<script>
export default {
  props: ['Title', 'HTML']
}
</script>
