<template>
  <div class="home">
    <div class="head">
      <label class="text1">CARREGADORES FRONTAIS</label>
      <br><label class="text1">AGRÍCOLAS</label>
      <br><label class="text2">Simples para seu trator, essencial para seu trabalho.</label>
    </div>
    <b-container class="menu">
      <div class="row custom-gutter align-items-center">
        <div class="col-lg-3 col-6">
          <div class="serie">
            <img class="photo" src="../assets/images/seriem.jpg">
            <img class="serielabel" src="../assets/images/labelm.png" alt="label">
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <div class="serie">
            <img class="photo" src="../assets/images/seriet.jpg">
            <img class="serielabel" src="../assets/images/labelt.png" alt="label">
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <div class="serie">
            <img class="photo" src="../assets/images/seriel.jpg">
            <img class="serielabel" src="../assets/images/labell.png" alt="label">
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <div class="serie">
            <img class="photo" src="../assets/images/phd.jpg">
            <img class="serielabel" src="../assets/images/phd.png" alt="label">
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
var x = ''
export default {
  data () {
  }
}
</script>

<style scoped>
  @font-face {
    font-family: 'Apex New Book';
    src: url("../assets/fonts/Apex New Book.otf");
  }
  @font-face {
    font-family: 'intro-cond';
    src: url('../assets/fonts/intro-cond.black-free.otf');
  }
  .home {
    display: flex;
    flex-direction: column;
    max-height: 100%;
    justify-content: center;
    align-items: center;
  }
  .head {
    max-height: 100px;
    margin-top: 20px;
  }
  .text1 {
    font-family: intro-cond;
    color: #b00024;
    line-height: 20px;
    font-size: 20px;
  }
  .text2 {
    font-family: Apex New Book;
    font-weight: lighter;
    font-size: 18px;
  }
  .menu {
    min-width: 80%;
    min-height: 100%;
  }
  .custom-gutter > [class*='col-'] {
    padding: 5px;
  }
  .serie {
    position: relative;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    object-fit: cover;
    transition: all 0.3s ease;
  }
  .photo {
    object-position: -90px 0;
    width: 150%;
    height: 100%;
    transition: all 0.3s ease;
  }
  .serielabel {
    position: absolute;
    bottom: 10px;
    right: 10px;
    height: 20px;
  }
  @media (min-width: 768px) {
    .photo {
      object-position: -150px 0;
    }
  }
  @media (min-width: 1024px) {
    .photo {
      object-position: -100px 0;
    }
  }
  @media (min-width: 1280px) {
    .photo {
      object-position: -130px 0;
    }
    .serie:hover {
    transform: scale(1.1);
    }
    .serielabel {
      height: 30px;
    }
    .custom-gutter > [class*='col-'] {
    padding: 10px;
    }
    .head {
      display: flex;
      flex-direction: column;
      min-height: 200px;
      min-width: 75%;
      margin-top: 20px;
      margin-bottom: 20px;
      justify-content: center;
      align-items: flex-start;
    }
    .text1 {
      font-size: 40px;
      line-height: 25px;
    }
    .text2 {
      font-size: 35px;
    }
  }
</style>
