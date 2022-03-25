<template>
  <h1 class="text-3xl my-5 font-bold text-center">ASTON DIGEST</h1>
  <div class="flex gap-4 justify-center bg-gray-100 p-2 mt-5 md:mt-5 md:mb-1">
    <router-link class="navbar-brand" to="/">
      <p>Home</p>
    </router-link>
    <router-link class="navbar-brand" to="/">
      <p>About</p>
    </router-link>
    <router-link class="navbar-brand" to="/articles">
      <p>Articles</p>
    </router-link>
  </div>
  <div class="flex gap-4 justify-center text-xs">
    <p @click="LoadCategory('Opinion')">Opinion</p>
    <p @click="LoadCategory('Science & Medicine')">Science & Medicine</p>
    <p @click="LoadCategory('Current Events')">Current Events</p>
  </div>
  <router-view/>
</template>

<script>
export default {
  methods: {
    LoadCategory (category) {
      this.$router.push({
        name: 'category',
        params: {
          Category: category
        }
      })
    }
  }
}
</script>

<style scoped>
p {
  @apply cursor-pointer
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
