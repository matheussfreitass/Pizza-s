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
import cartStore from "src/stores/cartStore";

export default {
  name: "CadastroClientePage",
  components: {
    FormCliente,
  },
  data() {
    return {
      cliente: {},
    };
  },
  created() {
    this.cliente = cartStore.cliente;
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
