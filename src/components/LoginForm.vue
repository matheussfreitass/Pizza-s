<template>
  <q-page>
    <q-form @submit="onSubmit">
      <q-input v-model="email" label="E-mail" type="email" required />
      <q-input v-model="senha" label="Senha" type="password" required />
      <q-btn type="submit" label="Login" />
      <q-banner v-if="erro" class="q-mt-md" type="negative">
        {{ erro }}
      </q-banner>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { authService } from "../services/authService";

export default {
  setup() {
    const email = ref("");
    const senha = ref("");
    const erro = ref("");

    const onSubmit = async () => {
      const loginValido = await authService.validarLogin(
        email.value,
        senha.value
      );
      if (loginValido) {
        erro.value = "";
        alert("Login bem-sucedido!");
      } else {
        erro.value = "E-mail ou senha inválidos";
      }
    };

    return {
      email,
      senha,
      erro,
      onSubmit,
    };
  },
};
</script>

<style scoped>
.q-page {
  max-width: 400px;
  margin: 0 auto;
}
</style>
