<template>
  <div class="home">
    <div class="head" >
      <h1>CARREGADORES FRONTAIS AGRÍCOLAS</h1>
      <h2>Simples para seu trator,<br>essencial para seu trabalho.</h2>
    </div>
    <div class="menu">
      <!-- serie m -->
      <transition name="slide">
        <span v-if="selection === 'seriem'">
          <span class="btn spec"><label class="btnlabel">ESPECIFICAÇÕES</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn opt" ><label class="btnlabel">OPCIONAIS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn ace" ><label class="btnlabel">ACESSÓRIOS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
        </span>
      </transition>
      <transition name="fade">
        <div :class="[selection == 'seriem' ? 'frame _0' : 'frame _1']" v-if="selection == 'all' || selection === 'seriem'" @click="selection = 'seriem'">
          <img class="photo" src="../assets/images/seriem.jpg"/>
          <img class="serie" src="../assets/images/labelm.png" alt="labelm"/>
        </div>
      </transition>
      <!-- serie t -->
      <transition name="slide">
        <span v-if="selection === 'seriet'">
          <span class="btn spec"><label class="btnlabel">ESPECIFICAÇÕES</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn opt" ><label class="btnlabel">OPCIONAIS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn ace" ><label class="btnlabel">ACESSÓRIOS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
        </span>
      </transition>
      <transition name="fade">
        <div :class="[selection == 'seriet' ? 'frame _0' : 'frame _2']" v-if="selection == 'all' || selection === 'seriet'" @click="selection = 'seriet', isActive = true">
          <img class="photo" src="../assets/images/seriet.jpg"/>
          <img class="serie" src="../assets/images/labelt.png" alt="labelt"/>
        </div>
      </transition>
      <!-- serie l -->
      <transition name="slide">
        <span v-if="selection === 'seriel'">
          <span class="btn spec"><label class="btnlabel">ESPECIFICAÇÕES</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn opt" ><label class="btnlabel">OPCIONAIS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn ace" ><label class="btnlabel">ACESSÓRIOS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
        </span>
      </transition>
      <transition name="fade">
        <div :class="[selection == 'seriel' ? 'frame _0' : 'frame _3']" v-if="selection == 'all' || selection === 'seriel'" @click="selection = 'seriel'">
          <img class="photo" src="../assets/images/seriel.jpg"/>
          <img class="serie" src="../assets/images/labell.png" alt="labell"/>
        </div>
      </transition>
      <!-- phd -->
      <transition name="slide">
        <span v-if="selection === 'phd'">
          <span class="btn spec"><label class="btnlabel">ESPECIFICAÇÕES</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn opt" ><label class="btnlabel">OPCIONAIS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn ace" ><label class="btnlabel">ACESSÓRIOS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
        </span>
      </transition>
      <transition name="fade">
        <div :class="[selection == 'phd' ? 'frame _0' : 'frame _4']" v-if="selection == 'all' || selection === 'phd'" @click="selection = 'phd'">
          <img class="photo" src="../assets/images/phd.jpg"/>
          <img class="serie" src="../assets/images/phd.png" alt="phd"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      selection: 'all'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: intro-cond;
  src: url("../assets/fonts/intro-cond.black-free.otf")
}
@font-face {
  font-family: Apex New Book;
  src: url("../assets/fonts/Apex New Book.otf");
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter, .fade-leave-to {
  transform: translateX(-400px);
  opacity: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s 0.3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
h1 {
  font-family: Apex New Book;
  font-weight: bolder;
  color: #d91920;
  font-size: 50px;
  margin: 0px;
}
h2{
  font-family: Apex New Book;
  font-weight: lighter;
  font-size: 40px;
  margin: 0px;
}
.head{
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 20px auto 20px auto;
  justify-content: space-evenly;
  text-align: left;
  min-height: 150px;
}
.menu{
  display: flex;
  flex-direction: row;
  max-height: 300px;
  max-width: 1600px;
  margin: auto;
  position: relative;
}
.frame {
  position: absolute;
  transition: all 0.4s ease;
  cursor: pointer;
}
.frame._0 {
  left: 0px;
}
.frame._1 {
  left: 0px;
}
.frame._2 {
  left: 400px;
}
.frame._3 {
  left: 800px;
}
.frame._4 {
  left: 1200px;
}
.photo {
 height: 350px;
 width: 400px;
 object-fit: cover;
 object-position: 100% 0px;
 transition: 0.3s;
 filter: saturate(0.3);
}
.frame:hover > .photo{
  object-position: 90% 0px;
  filter: saturate(1);
}
.frame:hover > .serie{
  filter: grayscale(0%);
}
.btn{
  position: absolute;
  max-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.btn:hover > .btnimg{
  max-height: 51px;
}
.btn.spec {
  top: 10px;
  left: 400px;
}
.btn.opt {
  top: 70px;
  left: 400px;
}
.btn.ace {
  top: 130px;
  left: 400px;
}
.btnimg {
  max-height: 50px;
}
.btnlabel {
  position: absolute;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  cursor: pointer;
}
.serie {
  position: absolute;
  right: 10px;
  bottom: 10px;
  max-height: 40px;
  filter: grayscale(100%);
}
</style>
