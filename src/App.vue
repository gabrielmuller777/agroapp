<template>
  <div class="app">
    <div class="navbar">
      <!--<router-link to="/">Home</router-link> | -->
    </div>
    <router-view/>
    <div class="footer">
      <img class="logo" src="../src/assets/images/logowhite.png" alt="logowhite">
    </div>
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
  min-height: 70%;
}
.navbar {
  min-height: 50px;
  padding: 0px;
  background-color: #4f1013;
}
.footer {
  width: 100%;
  padding: 0px;
  background-color: #4f1013;
  position: absolute;
  bottom: 0px;
}
body{
  background-color: white;
  margin: 0px;
  min-width: 100%;
  min-height: 100%;
}
.logo {
  max-width: 300px;
  margin: 20px auto 20px auto;
}
</style>
