<template>
  <div class="lista">
    <CardProduto
      v-for="produto in produtos"
      :key="produto.id"
      :produto="produto"
      @comprar="onComprar"
      @detalhes="onDetalhes"
      @retirar="onRetirar"
      :botoes="botoes"
    />
  </div>
</template>
<script>
// import CardProduto from "src/components/CardProduto.vue";
import CardProduto from "src/components/CardProduto.vue";
export default {
  name: "ListaProdutos", //componente name
  emits: ["comprar", "retirar", "detalhes"],
  components: {
    CardProduto,
  },
  props: {
    //atributos do componente
    produtos: {
      type: Array,
      required: true,
    },
    botoes: {
      type: Array,
      required: false,
      default: () => ["comprar", "retirar", "detalhes"],
    },
  },
  methods: {
    onComprar(produto) {
      this.$emit("comprar", produto);
    },
    onRetirar(produto) {
      this.$emit("retirar", this.produto);
    },
    onRetalhes(produto) {
      this.$emit("detalhes", this.produto);
    },
  },
};
</script>
<style>
.lista {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: grey;
  border: 0.5px solid black;
  box-shadow: 5px 5px 5px black;
}
</style>
