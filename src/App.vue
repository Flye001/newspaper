<template>
  <!-- <nav class="navbar navbar-light bg-light mb-2">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="https://www.keaston.bham.sch.uk/_site/images/design/logo.png" alt="" width="28" height="30" class="d-inline-block align-text-top">
        Aston School Newspaper
      </router-link>
    </div>
  </nav> -->
  <h1 class="text-3xl my-5">ASTON NEWSPAPER</h1>
  <div class="flex gap-4 justify-center bg-gray-100 p-2 mt-5 md:my-5">
    <router-link class="navbar-brand" to="/">
      <p>Home</p>
    </router-link>
    <router-link class="navbar-brand" to="/">
      <p>About</p>
    </router-link>
    <router-link class="navbar-brand" to="/">
      <p>Articles</p>
    </router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
