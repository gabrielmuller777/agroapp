<template>
  <div class="app">
    <div class="header">
      <img src="../src/assets/images/logowhite.png" style="height: 30px">
    </div>
    <router-view/>
    <b-navbar fixed=bottom style="backgroundColor: #4f1013">
      <div class="footer">
        <label>Todos os Direitos Reservados @Marispan Implementos Agricolas 2017</label>
      </div>
    </b-navbar>
  </div>
</template>

<style>
@font-face {
  font-family: 'Apex New Book';
  src: url('./assets/fonts/Apex New Book.otf');
}
.app {
  font-family: Apex New Book;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
  min-height: 100%;
}
.header {
  min-height: 50px;
  padding-top: 10px;
  background-color: #b00024;
}
.nav {
  padding: 0px !important;
}
.footer {
  display: flex;
  flex-direction: row;
  min-width: 100%;
  max-height: 70px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 15px;
}
body, html{
  background-color: white;
  margin: 0px;
  min-width: 100%;
  min-height: 100%;
}
@media (max-width: 640px) {
  .footer {
    max-height: 70px;
  }
}
</style>
