<template>
  <h1 class="text-3xl font-bold text-center bg-slate-500 text-white py-5">The Aston Digest</h1>
  <div class="flex gap-4 bg-slate-400 text-white justify-between">
    <div class="flex flex-row gap-4 ml-3">
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
    <svg viewBox="0 0 100 70" width="40" height="40" class="my-auto mr-3 cursor-pointer" @click="ToggleVisible">
      <rect width="100" height="7"></rect>
      <rect y="30" width="100" height="7"></rect>
      <rect y="60" width="100" height="7"></rect>
    </svg>
  </div>

  <div class="flex gap-4 justify-center text-xs bg-slate-200" v-if="visible">
    <p @click="LoadCategory('Opinion')">Opinion</p>
    <p @click="LoadCategory('Science & Medicine')">Science & Medicine</p>
    <p @click="LoadCategory('Current Events')">Current Events</p>
  </div>
  <router-view/>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    ToggleVisible () {
      this.visible = !this.visible
    },
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
