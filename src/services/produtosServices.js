import axios from "axios";
import { Notify } from "quasar";
import cartStore from "src/stores/cartStore";

const jsonAPI = axios.create({
  baseURL: process.env.URL,
});
const produtosServices = {
  getProdutos: (callback) => {
    if (cartStore.produtos.length > 0) {
      callback(cartStore.produtos);
      return;
    }
    jsonAPI
      .get("produtos")
      .then((retorno) => {
        cartStore.produtos = retorno.data;
        callback(retorno.data);
      })
      .catch((erro) => {
        Notify.create({
          message: erro.message,
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
        //this.mensagemErro(erro.message);
      });
  },
};
export default produtosServices;
