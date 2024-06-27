<template>
  <q-card class="q-ma-lg q-pa-md">
    <h5>Cadastro Clientes</h5>
    <form-cliente
      @salvarCliente="onSalvarCliente"
      :cliente="cliente"
    ></form-cliente>
  </q-card>
</template>

<script>
import FormCliente from "../components/FormCliente.vue";
import services from "src/services";

export default {
  name: "CadastroClientePage",
  components: {
    FormCliente,
  },
  data() {
    return {
      cliente: { id: "", nome: "", cpf: "" },
    };
  },
  methods: {
    onSalvarCliente(cliente) {
      services.clientes.saveCliente(cliente);
    },
  },
};
</script>
