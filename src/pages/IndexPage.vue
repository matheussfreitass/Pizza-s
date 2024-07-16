<template>
  <q-page class="flex flex-center">
    {{ cliente }}
    <ListaProdutos
      :produtos="arrProdutos"
      @comprar="onComprar"
      @detalhes="onDetalhes"
      @returar="onRetirar"
      :botoes="['comprar']"
  /></q-page>
</template>

<script>
import { defineComponent } from "vue";
import services from "src/services";
import cartStore from "src/stores/cartStore";
import ListaProdutos from "src/components/ListaProdutos.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    ListaProdutos,
  },
  data() {
    return {
      arrProdutos: [],
      cliente: null,
    };
  },
  created() {
    services.getProdutos((prods) => {
      this.arrProdutos = prods;
    });
    cartStore.cliente = {
      id: "0000",
      nome: "Brad Luiz",
      cpf: "123.456.789-00",
    };
    this.cliente = cartStore.cliente;
  },
  methods: {
    onComprar(produto) {
      console.log(produto);
      console.log(cartStore.carrinho);
      cartStore.addProduto(produto, 1);
      console.log(cartStore.carrinho);
    },
  },
});
</script>
<style>
#cadastroBtn {
  background-color: red;
}
</style>
