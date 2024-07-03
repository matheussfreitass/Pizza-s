<template>
  <q-form @submit="onSubmit" ref="form">
    <q-input
      rounded
      v-model="clienteModel.nome"
      label="Nome"
      color="orange"
      hint="Informe seu nome"
      clearable
      lazy-rules
      :rules="[
        (val) => val.length > 0 || 'Campo Obrigatório',
        (val) => val.indexOf(' ') > 0 || 'Nome muito grande',
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
    {{ clienteModel }}
    {{ cliente }}
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
      <div class="q-gutter-sm">
        <q-checkbox
          class="termos"
          rigth-label
          v-model="rigth"
          label="Declaro que li e aceito os termos e condições da página"
        >
        </q-checkbox>
      </div>
    </div>
    <q-btn label="Salvar" color="primary" @click="salvar"></q-btn>
    <q-btn color="black">
      <router-link to="/TermosCondicoes">Termos e condicoes</router-link></q-btn
    >
  </q-form>
</template>

<script>
import services from "src/services";
import { ref } from "vue";

export default {
  name: "FormCliente",

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
      },
    };
  },
  created() {
    if (this.cliente) {
      this.clienteModel = this.cliente;
    }
  },
  methods: {
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
            services.clientes.saveCliente(this.clienteModel);
          } else {
            services.mensagemErro("Verifique os campos obrigatórios.");
          }
        });
      }
    },
  },
  setup() {
    return {
      rigth: ref(true),
      val1: ref(true),
    };
  },
};
</script>
