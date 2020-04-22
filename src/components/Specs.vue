<template>
  <div class="Specs">
    <div class="model">
      <img class="label" src="../assets/images/labelmblk.png" alt="label">
      <span class="labelwrapper"><label class="labeltxt">ESPECIFICAÇÕES</label><img class="labelbg" src="../assets/images/botao.png" alt="labelm"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Specs'
}
</script>

<style scoped>
  @font-face {
  font-family: intro-cond;
  src: url("../assets/fonts/intro-cond.black-free.otf")
  }
  @font-face {
  font-family: Apex New Book;
  src: url("../assets/fonts/Apex New Book.otf");
  }
  .model {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    max-width: 1600px;
    min-height: 180px;
    background-color: white;
    margin: auto;
  }
  .labelwrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    min-height: 70px;
  }
  .labelbg {
    height: 70px;
  }
  .label {
    height: 50px;
  }
  .labeltxt {
    position: absolute;
    left: 20px;
    font-size: 30px;
    color: white;
  }
</style>
