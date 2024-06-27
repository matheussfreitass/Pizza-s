import { defineStore } from "pinia";

const useStore = defineStore("cart", {
  state: () => ({
    carrinho: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    addProduto(produto, quantidade) {
      this.carrinho.push({ qtd: quantidade, produto: produto });
    },
    clearCart() {
      this.carrinho = [];
    },
  },
  checkCPF(cpf) {
    if (cpf.lenght !== 14) return false;
    if (cpf[3] !== "." || cpf[7] !== "." || cpf[11] !== ".") {
      return false;
    }
    return true;
  },
});
const cartStore = useStore();
export default cartStore;
