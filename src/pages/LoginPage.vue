<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="
      background-image: url(../../public/images/10336107_18514975.svg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    "
  >
    <div class="column">
      <div class="row">
        <h5 class="text-h5 color-black q-my-md"></h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-22">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                color="orange"
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="email"
              />
              <q-input
                color="orange"
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="password"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="black"
              size="lg"
              class="full-width"
              label="Login"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Crie uma conta</p>

            <p class="text-grey-6">Acesse aqui para consulta de preços</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
// export default {
//   name: "Login",
//   data() {
//     return {
//       email: "",
//       password: "",
//     };
//   },
// };
</script>

<style>
.q-card {
  width: 360px;
}
</style>
