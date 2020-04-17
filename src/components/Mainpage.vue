<template>
  <div class="hello">
    <div class="head">
      <h1>CARREGADORES FRONTAIS AGRÍCOLAS</h1>
      <h2>Simples para seu trator, essencial para seu trabalho.</h2>
    </div>
    <div class="photopai">
      <div class="frame">
        <img class="photo" src="../assets/seriem.jpg"/>
        <span class="btn spec"><label class="btnlabel">ESPECIFICAÇÕES</label><img class="btnimg" src="../assets/botao.png" alt="botao"></span>
        <span class="btn opt"><label class="btnlabel">OPCIONAIS</label><img class="btnimg" src="../assets/botao.png" alt="botao"></span>
        <span class="btn ace"><label class="btnlabel">ACESSÓRIOS</label><img class="btnimg" src="../assets/botao.png" alt="botao"></span>
        <img class="serie" src="../assets/labelm.png" alt="labelm"/>
      </div>
      <div class="frame">
        <img class="photo" src="../assets/seriet.jpg"/>
        <span class="btn"></span>
      </div>
      <div class="frame">
        <img class="photo" src="../assets/seriel.jpg"/>
        <span class="btn"></span>
      </div>
      <div class="frame">
        <img class="photo" src="../assets/phd.jpg"/>
        <span class="btn"></span>
      </div>
    </div>
    <div >
      <img class="logo" src="../assets/logo.png" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'Mainpage'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bolder;
  color: #d91920ff;
  font-size: 50px;
}
h2{
  font-weight: lighter;
  font-size: 30px;
}
.head{
  max-width: 1200px;
  margin: auto;
  text-align: center;
  height: 200px;
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
.frame {
  position: relative;
  overflow: hidden;
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
  opacity: 1;
}
.btn {
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
  left: -270px;
  transition:  0.3s;
}
.btn.opt {
  top: 110px;
  left: -270px;
  transition:  0.3s 0.1s;
}
.btn.ace {
  top: 170px;
  left: -270px;
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
}
.logo{
  max-width: 600px;
  margin: auto;
  padding: 50px;
}
.photopai{
  display: flex;
  flex-direction: row;
  height: 400px;
  max-width: 1600px;
  margin: auto;
}
</style>
