<template>
  <div class="specs">
    <!-- specs -->
    <div class="header">
      <img class="serie" :src="require('../assets/images/'+currentSerie+'label.png')" alt="label">
      <h2 class="d-none d-md-block">ESPECIFICAÇÕES</h2>
      <h4 class="d-sm-none">ESPECIFICAÇÕES</h4>
    </div>
    <!-- table -->
    <b-table responsive class="tb" :items="items" :fields="fields" dark="true" striped="true" bordered="true"></b-table>
    <!-- opcionais -->
    <div class="head" v-if="currentSerie === 'seriem'">
      <h2 class="d-none d-md-block">OPCIONAIS</h2>
      <h4 class="d-sm-none">OPCIONAIS</h4>
      <div class="opt">
        <b-row class="justify-content-center no-gutters" style="min-width:100%;padding-top:2vh;padding-bottom:2vh;backgroundColor:#343a40">
          <span v-for="item in op" :key="item">
          <b-col class="frame col-md-4">
            <img class="photo" :src="require('../assets/images/opt/' + item + '.png')">
            <br><label  v-if="item !== 'dummy'" style="margin-top:5px">{{item}}</label>
          </b-col>
          </span>
        </b-row>
      </div>
    </div>
    <!-- acessorios -->
    <div class="head">
      <h2 class="d-none d-md-block">ACESSÓRIOS</h2>
      <h4 class="d-sm-none">ACESSÓRIOS</h4>
      <div class="opt">
        <b-row class="justify-content-center no-gutters" style="min-width:100%;padding-top:2vh;padding-bottom:2vh;backgroundColor:#343a40">
          <span v-for="item in ace" :key="item">
          <b-col class="frame ace col-md-3">
            <img class="photo ace" :src="require('../assets/images/acessorios/' + item + '.png')">
            <br><label style="margin-top:5px">{{item}}</label>
          </b-col>
          </span>
        </b-row>
      </div>
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
      ng: true,
      fields: ['MODELO', 'VERSÃO', 'TRATOR', 'CARGA_MÁX.', 'ALTURA_MÁX.'],
      items: specs[this.$props.currentSerie],
      op: ['3ª Função', 'Multifaster', 'Joystick', 'Válvula de Segurança', 'Amortecimento', 'dummy'],
      ace: ['Concha Dianteira', 'Concha Multifunção', 'Garfo para Silagem', 'Guincho', 'Paleteira', 'Pegador de Feno', 'Plaina Enleiradora', 'Plaina Niveladora']
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
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding-bottom: 5vh;
}
.header {
  font-family: Apex New Book;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  margin: 10px 0px 50px 0;
  padding-left: 5vw;
  justify-content: center;
  align-items: flex-start;
  color: #b00024;
  background-color: white;
}
.head {
  font-family: Apex New Book;
  display: flex;
  flex-direction: column;
  min-width:100%;
  min-height: 100%;
  justify-content: center;
  margin-bottom: 50px;
  align-items: center;
  color: #b00024;
}
.tb {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 4vw !important;
  min-height: 100%;
  max-width: 95%;
  border-radius: 15px 0 15px 0;
  background-color: #b00024;
  padding-top: 5%;
  padding-bottom: 5%;
}
.serie {
  width: 150px;
  margin-bottom: 10px;
}
.opt {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 15px 0 15px 0;
  background-color: #b00024;
  padding-top: 2vh;
  padding-bottom: 2vh;
  width: 95vw;
  
}
.no-gutters > .col{
  margin-right: 5px;
  margin-left: 5px;
}
.no-gutters > [class*="col-"] {
    padding-right: 5px;
  }
.frame {
  background-color: #343a40;
  font-size: 4vw;
  line-height: 5vw;
  font-family: sans-serif;
  width: 47.5vw;
  height: 23vh;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 10px;
  color: white;
  word-wrap:break-word;
}
.photo {
  object-fit: cover;
  width: 40vw;
}
.photo.ace {
  width: 45vw;
}
@media (min-width:640px) {
  .tb {
    font-size: 2vw !important;
    padding-top: 2%;
    padding-bottom: 2%;
  }
}
@media (min-width:768px) {
  .frame {
    height: 30vh;
  }
}
@media (min-width:1024px) {
  .tb {
    font-size: 2vw !important;
    min-height: 100%;
    max-width: 80%;
  }
  .opt {
    max-width: 80%;
  }
  .frame {
    font-size: 2.5vw;
    max-width: 26vw;
    height:30vh;
  }
  .photo {
    max-width: 25vw;
  }
  .photo.ace {
    width: 35vw;
}
}
@media (min-width:1280px) {
  .tb {
    font-size: 1vw !important;
    min-height: 100%;
    max-width: 50%;
    padding-top: 1%;
    padding-bottom: 1%;
  }
  .serie {
    width: 250px;
  }
  .opt {
    max-width: 50%;
  }
  .frame {
    font-size: 1vw;
    max-width: 15vw;
    height:30vh;
  }
  .frame.ace {
    width: 12vw;
    height: 25vh;
  }
  .photo {
    max-width: 15vw;
  }
  .photo.ace {
    width: 11.5vw;
}
}
</style>
