<template>
  <div class="app">
    <div class="navbar">
      <!--<router-link to="/">Home</router-link> | -->
    </div>
    <router-view/>
    <div class="footer"></div>
  </div>
</template>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
}
.navbar {
  min-height: 50px;
  padding: 0px;
  background-color: #4f1013;
}
.footer {
  width: 100%;
  min-height: 70px;
  padding: 0px;
  background-color: #4f1013;
}
body{
  background-color: #4f1013;
  margin: 0px;
  min-width: 100%;
  min-height: 100%;
}
</style>
