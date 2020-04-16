<template>
  <div class="hello">
    <div class="head">
      <h1>CARREGADORES FRONTAIS AGRÍCOLAS</h1>
      <h2>Simples para seu trator, essencial para seu trabalho.</h2>
    </div>
    <div class="photopai">
      <div class="frame">
        <img class="photo" src="../assets/seriem.jpg"/>
        <span class="btn"></span>
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
}
.frame:hover > .photo{
  object-position: 90% 10%;
  filter: none;
 -webkit-filter: grayscale(100%);
 -moz-filter:    grayscale(100%);
 -ms-filter:     grayscale(100%);
 -o-filter:      grayscale(100%);
  cursor: pointer;
}
.frame:hover > .btn{
  width: 60%;
  cursor: pointer;
}
.btn {
  position: absolute;
  top: 50px;
  left: 0px;
  width: 20%;
  min-height: 50px;
  background-color: #d91920ff;
  transition: width 0.3s ease-in-out;
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
