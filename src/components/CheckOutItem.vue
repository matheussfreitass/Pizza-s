<template>
  <div>
    <q-list>
      <q-btn label="-" @click="quantidade--" size="xs" />{{ quantidade
      }}<q-btn label="+" @click="quantidade++" size="xs" />
      {{ item.produto.nome }} R${{
        (quantidade * item.produto.preco).toFixed(2)
      }}
      <q-btn label="x" @click="remove" size="xs" color="red"></q-btn>
    </q-list>
  </div>
</template>
<script>
export default {
  name: "CheckOutItem",
  emits: ["remover"],
  props: {
    item: {
      type: Object,
      requered: true,
    },
  },
  watch: {
    quantidade(atual, anterior) {
      if (atual < 1) {
        if (confirm("Deseja remover o item?")) {
          this.remove();
        } else {
          this.quantidade = 1;
        }
      }
    },
  },
  data() {
    return {
      quantidade: this.item.qtd,
    };
  },
  methods: {
    onComprar() {
      // this.$emit("comprar",this.produto);
    },
    remove() {
      this.$emit("remover", this.item.produto.id);
    },
  },
};
</script>
