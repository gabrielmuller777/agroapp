<template>
  <div class="app">
    <div class="navi">
      <!--<router-link to="/">Home</router-link> | -->
    </div>
    <router-view/>
  </div>
</template>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navi {
  height: 50px;
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body{
  margin: 0px;
}
</style>
