<template>
  <div class="home">
    <div class="head" >
      <h1>CARREGADORES FRONTAIS AGRÍCOLAS</h1>
      <h2>Simples para seu trator,<br>essencial para seu trabalho.</h2>
    </div>
    <div class="menu">
      <transition name="fade">
        <div class="frame _0" v-if="selection == 'all' || selection === 'seriem'">
          <img class="photo" src="../assets/images/seriem.jpg"/>
          <span class="btn spec" @click="selection = 'seriem'"><label class="btnlabel">ESPECIFICAÇÕES</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn opt"><label class="btnlabel">OPCIONAIS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn ace"><label class="btnlabel">ACESSÓRIOS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <img class="serie" src="../assets/images/labelm.png" alt="labelm"/>
        </div>
      </transition>
      <transition name="fade">
        <div :class="[selection == 'seriet' ? 'frame _0' : 'frame _1']" v-if="selection == 'all' || selection === 'seriet'">
          <img class="photo" src="../assets/images/seriet.jpg"/>
          <span class="btn spec" @click="selection = 'seriet', isActive = true"><label class="btnlabel">ESPECIFICAÇÕES</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn opt"><label class="btnlabel">OPCIONAIS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn ace"><label class="btnlabel">ACESSÓRIOS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <img class="serie" src="../assets/images/labelt.png" alt="labelt"/>
        </div>
      </transition>
      <transition name="fade">
        <div :class="[selection == 'seriel' ? 'frame _0' : 'frame _2']" v-if="selection == 'all' || selection === 'seriel'">
          <img class="photo" src="../assets/images/seriel.jpg"/>
          <span class="btn spec" @click="selection = 'seriel'"><label class="btnlabel">ESPECIFICAÇÕES</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn opt"><label class="btnlabel">OPCIONAIS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn ace"><label class="btnlabel">ACESSÓRIOS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <img class="serie" src="../assets/images/labell.png" alt="labell"/>
        </div>
      </transition>
      <transition name="fade">
        <div :class="[selection == 'phd' ? 'frame _0' : 'frame _3']" v-if="selection == 'all' || selection === 'phd'">
          <img class="photo" src="../assets/images/phd.jpg"/>
          <span class="btn spec" @click="selection = 'phd'"><label class="btnlabel">ESPECIFICAÇÕES</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn opt"><label class="btnlabel">OPCIONAIS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <span class="btn ace"><label class="btnlabel">ACESSÓRIOS</label><img class="btnimg" src="../assets/images/botao.png" alt="botao"></span>
          <img class="serie" src="../assets/images/phd.png" alt="phd"/>
        </div>
      </transition>
    </div>
    <div >
      <img class="logo" src="../assets/images/logo.png" alt="logo" @click="selection = 'all'"/>
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
  height: 400px;
  max-width: 1600px;
  margin: auto;
  position: relative;
}
.frame {
  position: absolute;
  overflow: hidden;
  transition: all 0.4s ease;
}
.frame._0 {
  left: 0px;
}
.frame._1 {
  left: 400px;
}
.frame._2 {
  left: 800px;
}
.frame._3 {
  left: 1200px;
}
.photo {
 height: 400px;
 width: 400px;
 object-fit: cover;
 object-position: 100% 0;
 -webkit-filter: grayscale(0%);
 -moz-filter:    grayscale(0%);
 -ms-filter:     grayscale(0%);
 -o-filter:      grayscale(0%);
 transition: grayscale 1s;
 filter: gray;
}
.frame:hover > .photo{
  object-position: 90% 10%;
  filter: none;
 -webkit-filter: grayscale(100%);
 -moz-filter:    grayscale(100%);
 -ms-filter:     grayscale(100%);
 -o-filter:      grayscale(100%);
}
.frame:hover > .btn{
  left: 0;
  cursor: pointer;
  opacity: 0.8;
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
  opacity: 0.7;
}
.btn:hover > .btnimg{
  max-height: 51px;
}
.btn.spec {
  top: 50px;
  left: -300px;
  transition:  0.3s;
}
.btn.opt {
  top: 110px;
  left: -300px;
  transition:  0.3s 0.1s;
}
.btn.ace {
  top: 170px;
  left: -300px;
  transition:  0.3s 0.2s;
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
.logo{
  max-width: 600px;
  margin: auto;
  padding: 50px;
}
</style>
