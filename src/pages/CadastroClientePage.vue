<template>
  <q-form class="q-ma-lg q-pa-md">
    <h5>Cadastre-se</h5>
    <form-cliente
      @salvarCliente="onSalvarCliente"
      :cliente="cliente"
    ></form-cliente>
  </q-form>
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
      cliente: { nome: "", cpf: "" },
    };
  },
  methods: {
    onSalvarCliente(cliente) {
      if (cliente.id) {
        services.clientes.updateCliente(cliente);
      } else {
        services.clientes.saveCliente(cliente);
      }
    },
  },
};
</script>
