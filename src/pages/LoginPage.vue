<template>
  <b-row class="vh-100 vw-100 row-login">
    <b-col
      sm="5"
      class="d-flex justify-content-center aling-itens-center left-login"
    ></b-col>
    <q-col sm="6">teste</q-col>
  </b-row>
  <div class="q-pa-md example-column-row-width">
    <div class="column" style="height: 150px">
      <div class="col">.col</div>
      <div class="col-5">.col-5</div>
      <div class="col">.col</div>
    </div>
  </div>
</template>

<style>
*::after *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.row-login {
  margin-left: 0;
}
.left-login {
  background-color: red;
}
</style>
