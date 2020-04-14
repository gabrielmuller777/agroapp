<template>
  <div class="hello">
    <div class="head">
      <h1>CARREGADORES FRONTAIS AGRÍCOLAS</h1>
      <h2>Simples para seu trator, essencial para seu trabalho.</h2>
    </div>
    <div class="photopai">
        <img class="photo" src="../assets/seriem.jpg"/>
        <img class="photo" src="../assets/seriet.jpg"/>
        <img class="photo" src="../assets/seriel.jpg"/>
        <img class="photo" src="../assets/phd.jpg"/>
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
.photo:hover{
  object-position: 90% 10%;
  filter: none;
 -webkit-filter: grayscale(100%);
 -moz-filter:    grayscale(100%);
 -ms-filter:     grayscale(100%);
 -o-filter:      grayscale(100%);
  cursor: pointer;
}
.logo{
  max-width: 600px;
  margin: auto;
  padding: 50px;
}
.photopai{
  height: 400px;
}
body{
  background-image: url("../assets/phd.jpg");
  background-color: black;
}
</style>
