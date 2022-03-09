<template>
  <nav class="navbar navbar-light bg-light mb-2">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="https://www.keaston.bham.sch.uk/_site/images/design/logo.png" alt="" width="28" height="30" class="d-inline-block align-text-top">
        Aston School Newspaper
      </router-link>
    </div>
  </nav>
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
