<template>
  <q-card class="cardProduto">
    <q-card-section>
      <q-card-title
        ><h5>{{ produto.nome }}</h5></q-card-title
      >
      <q-card-section> </q-card-section>
      <q-card-subtitle>R$:{{ produto.preco.toFixed(2) }}</q-card-subtitle>
    </q-card-section>
    <q-card-section>
      <q-img
        :src="produto.imagem"
        :alt="produto.nome"
        style="width: 100%; height: 200px"
      />
    </q-card-section>
    <q-card-action>
      <q-btn
        label="comprar"
        color="primary"
        @click="comprar"
        v-if="botoes.includes('comprar')"
      ></q-btn>
      <q-btn
        label="detalhes"
        color="primary"
        @click="detalhes"
        v-if="botoes.includes('detalhes')"
      ></q-btn>
      <q-btn
        label="retirar"
        color="primary"
        @click="retirar"
        v-if="botoes.includes('retirar')"
      ></q-btn>
    </q-card-action>
  </q-card>
</template>

<script>
export default {
  name: "CardProduto", //componente name
  props: {
    //atributos do componente
    produto: {
      type: Object,
      required: true,
    },
    comImagem: {
      type: Boolean,
      required: false,
      default: false,
    },
    botoes: {
      type: Array,
      required: false,
      default: () => ["comprar", "retirar", "detalhes"],
    },
  },
  emits: ["comprar", "retirar", "detalhes"],
  created() {
    console.log(this.produto);
  },
  mounted() {
    //metodo executado quando o componente é montado
    console.log(this.produto);
  },
  data() {
    return {};
  },
  computed: {
    //propriedades computadas pelo componente
  },

  methods: {
    comprar() {
      this.$emit("comprar", this.produto);
    },
    retirar() {
      this.$emit("retirar", this.produto);
    },
    detalhes() {
      this.$emit("detalhes", this.produto);
    },
  },
};
</script>
<style>
.cardProduto {
  width: 200px;
  min-width: 200px;
  margin: 10px;
  padding: 10px;
  text-align: center;
}
.cardProduto:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgb(211, 179, 39);
  transition: 1.5s;
}
</style>
