<template>
  <div class="app">
    <div class="header">
      <b-icon-list id="menu" class="d-md-none"></b-icon-list>
      <img class="d-none d-md-block" id="logowhite" src="./assets/images/logowhite.png">
      <img id="logo" class="d-md-none" src="./assets/images/logow.png">
      <b-icon-search id="icon" class="d-md-none"></b-icon-search>
    </div>
    <router-view :currentSerie="currentSerie" @selectedserie="sendserie($event)"/>
    <b-navbar fixed=bottom style="backgroundColor: #4f1013">
      <div class="footer">
        <label>Todos os Direitos Reservados @Marispan Implementos Agricolas 2017</label>
      </div>
    </b-navbar>
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
  min-height: 100%;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  min-height: 60px;
  background-color: #b00024;
  position: relative;
}
#menu {
  position: absolute;
  margin-left: 10px;
  min-height: 30px;
  min-width: 30px;
  left: 0px;
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
  display: flex;
  flex-direction: row;
  min-width: 100%;
  max-height: 45px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
}
body, html{
  background-color: white;
  margin: 0px;
  min-width: 100%;
  min-height: 100%;
}
@media (min-width: 640px) {
  .footer {
    min-height: 70px;
  }
  .header {
    justify-content: center;
    align-items: center;
  }
}
</style>
