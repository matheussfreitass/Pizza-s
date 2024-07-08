<template>
  <q-form @submit="onSubmit" ref="form">
    <q-input
      rounded
      v-model="clienteModel.nome"
      label="Nome completo"
      color="orange"
      hint="Informe seu nome"
      clearable
      lazy-rules
      :rules="[
        (val) => val.length > 0 || 'Campo Obrigatório',
        (val) =>
          val.indexOf(' ') > 0 || 'Nome precisa ser separado do sobrenome',
      ]"
    >
    </q-input>
    <q-input
      color="orange"
      bottom-slots
      v-model="clienteModel.cpf"
      label="CPF"
      hint="Informe seu CPF"
      clearable
      mask="###.###.###-##"
      :rules="[(val) => validaCPF(val) || 'CPF inválido']"
    >
    </q-input>
    <q-input
      color="orange"
      ref="email"
      v-model="clienteModel.email"
      label="Endereço de e-mail"
      dense
      type="email"
      bottom-slots
      @blur="atualizaVerificacaoEmail"
      autofocus
      :error="mostraErro"
      error-message="Insira um enredeço de e-mail válido"
    ></q-input>
    <q-input
      dense
      v-model="clienteModel.password"
      color="orange"
      label="Senha"
      :type="clienteModel.isPwd ? 'password' : 'text'"
      @keyup.enter="
        login();
        $event.target.blur();
      "
      ><q-icon
        :name="clienteModel.isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        color="grey"
        @click="clienteModel.isPwd = !clienteModel.isPwd"
    /></q-input>
    <q-input
      dense
      v-model="clienteModel.confirmPassword"
      color="orange"
      label="Repita a Senha"
      :type="clienteModel.isPwd ? 'password' : 'text'"
      :rules="[
        (val) => val.length > 0 || 'Campo Obrigatório',
        (val) => val === clienteModel.password || 'As senhas não correspondem',
      ]"
      @keyup.enter="
        login();
        $event.target.blur();
      "
      ><q-icon
        :name="clienteModel.isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        color="grey"
        @click="clienteModel.isPwd = !clienteModel.isPwd"
    /></q-input>

    <q-input
      rounded
      bottom-slots
      v-model="text"
      label="Endereço"
      color="orange-9"
    >
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:append>
        <q-icon
          name="close"
          @click="text = ''"
          class="cursor-pointer"
        /> </template
    ></q-input>
    <div class="q-pa-md">
      <q-btn color="primary">
        <router-link to="/TermosCondicoes"
          >Termos e condicoes</router-link
        ></q-btn
      >
      <div class="q-gutter-sm">
        <q-checkbox
          class="termos"
          rigth-label
          v-model="checkboxChecked"
          label="Declaro que li e aceito os termos e condições da página"
        >
        </q-checkbox>
      </div>
    </div>
    <q-btn
      label="Salvar"
      color="primary"
      @click="salvar"
      :disabled="!emailValid || !checkboxChecked"
    ></q-btn>
  </q-form>
</template>

<script>
import services from "src/services";
import { ref } from "vue";

export default {
  name: "FormCadastroCliente",
  emits: ["salvarCliente"],

  props: {
    cliente: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      clienteModel: {
        nome: "",
        cpf: "",
        email: "",
        isPwd: true,
        password: "",
      },
      emailValid: false,
      checkboxChecked: false,
    };
  },
  methods: {
    atualizaVerificacaoEmail() {
      // eslint-disable-next-line
      let reg =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      let valid = reg.test(this.clienteModel.email);

      if (valid) {
        console.log("email is valid");
        this.emailValid = true;
        this.showError = false;
      } else {
        console.log("email invalid");
        this.emailValid = false;
        this.showError = true;
      }
    },

    validaCPF(cpf) {
      return services.validaCPF(cpf);
    },
    salvar() {
      console.log(this.clienteModel);

      // Realiza a validação usando métodos específicos do componente q-form
      if (this.$refs.form) {
        this.$refs.form.validate().then((valido) => {
          if (valido) {
            // Lógica para salvar os dados ou enviar para o backend
            this.$emit("salvarCliente", this.clienteModel);
          } else {
            services.mensagemErro("Verifique os campos obrigatórios.");
          }
        });
      }
    },
  },
  created() {
    if (this.cliente) {
      this.clienteModel = this.cliente;
    }
  },
  setup() {
    return {
      rigth: ref(true),
    };
  },
};
</script>
