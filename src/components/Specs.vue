<template>
  <div class="specs">
    <div class="row">
      <div class="col">
        <label style="fontSize:100px">{{currentSerie}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Specs',
  props: ['currentSerie'],
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
  max-height: 100%;
  justify-content: center;
  align-items: flex-start;
  background-color: khaki;
}
.photo {
  object-fit: cover;
  object-position: 100% 80%;
  height: 100%;
  width: 100%;
}
.button {
  background-color: khaki;
}
</style>
