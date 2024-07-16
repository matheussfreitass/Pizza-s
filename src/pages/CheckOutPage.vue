<template>
  <h4>carrinho</h4>
  <CheckOutItem
    v-for="item in carrinho"
    :key="item.id"
    :item="item"
    @remover="onRemover"
  ></CheckOutItem>
</template>
<script>
import { data } from "autoprefixer";
import cartStore from "src/stores/cartStore";
import CheckOutItem from "src/components/CheckOutItem.vue";
export default {
  name: "CheckOutPage",
  components: {
    CheckOutItem,
  },
  data() {
    return {
      carrinho: Object,
      cliente: cartStore.cliente,
    };
  },
  created() {
    this.carrinho = cartStore.carrinho;
  },
  methods: {
    onRemover(id) {
      cartStore.removeProduto(id);
    },
  },
};
</script>
