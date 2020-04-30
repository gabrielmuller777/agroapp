<template>
  <div class="specs">
    <div class="head">
      <img class="serie" :src="require('../assets/images/'+currentSerie+'label.png')" alt="label">
      <h3>ESPECIFICAÇÕES</h3>
    </div>
    <div class="tablearea">
      <b-table responsive class="tb" :items="items" :fields="fields" dark="true" striped="true" bordered="true"></b-table>
    </div>
  </div>
</template>

<script>
import * as specs from '../assets/lists.js'
export default {
  name: 'Specs',
  props: ['currentSerie'],
  data () {
    return {
      fields: ['MODELO', 'VERSÃO', 'TRATOR', 'CARGA_MÁX.', 'ALTURA_MÁX.'],
      items: specs[this.$props.currentSerie],
    }
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Apex New Book";
  src: url("../assets/fonts/Apex New Book.otf");
}
@font-face {
  font-family: "intro-cond";
  src: url("../assets/fonts/intro-cond.black-free.otf");
}
.specs {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
}
.head {
  font-family: Apex New Book;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  margin: 10px;
  padding-left: 50px;
  justify-content: center;
  align-items: flex-start;
  color: #b00024;
}
.tablearea {
  max-width: 100%;
}
.tb {
  font-size: 14px;
}
.serie {
  width: 200px;
  margin-bottom: 10px;
}
</style>
