import { defineStore } from "pinia";

const useStore = defineStore("cart", {
  state: () => ({
    carrinho: [],
    cliente: null,
    produtos: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    addProduto(produto, quantidade) {
      this.carrinho.push({ qtd: quantidade, produto: produto });
    },
    clearCart() {
      this.carrinho.splice(0, this.carrinho.length);
    },
    removeProduto(id) {
      let p = 0;
      for (let i = 0; i < this.carrinho.at.length; i++) {
        if (this.carrinho[i].produto.id == id) {
          p = i;
          break;
        }
      }
      this.carrinho.splice(p, 1);
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
