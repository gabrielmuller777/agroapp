<template>
  <div class="app">
    <div class="header">
      <b-icon-list id="menu" class="d-md-none"></b-icon-list>
      <img class="d-none d-md-block" id="logowhite" src="./assets/images/logowhite.png">
      <img id="logo" class="d-md-none" src="./assets/images/logow.png">
      <b-icon-search id="icon" class="d-md-none"></b-icon-search>
    </div>
    <router-view :currentSerie="currentSerie" @selectedserie="sendserie($event)"/>
    <div class="footer">
      <label>Todos os Direitos Reservados @Marispan Implementos Agricolas 2017</label>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      currentSerie: ''
    }
  },
  methods: {
    sendserie(serie) {
      this.currentSerie = serie
      console.log(this.currentSerie)
    }
  }
}
</script>

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
  height: 100%;
  min-width: 100%;
  position: relative;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  min-height: 60px;
  min-width: 100%;
  background-color: #b00024;
  position: relative;
}
#menu {
  position: absolute;
  left: 10px;
  color: white;
}
#logo {
  position: absolute;
  max-height: 20px;
  left: 50px;
}
#logowhite{
  height: 40px;
}
#icon {
  position: absolute;
  color: white;
  right: 20px;
}
.footer {
  background-color: #4f1013;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 50px;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.7vh;
}
td, th {
  padding-left: 2px !important;
  padding-right: 2px !important;
  max-width: 20vw;
  word-wrap: break-word;
}
body, html{
  background-color: white;
  margin: 0px;
  min-width: 100%;
  height: 100%;
}
@media (min-width: 728px) {
  .footer {
    min-height: 70px;
    font-size: 2vh;
  }
  .header {
    justify-content: center;
    align-items: center;
  }
  td, th {
  padding-left: 2px !important;
  padding-right: 2px !important;
  max-width: 20vw;
  word-wrap: break-word;
  }
}
@media (min-width:1024px) {
  .footer {
    font-size: 2vh;
  }
}
</style>
