import axios from "axios";
import { Notify } from "quasar";
import clientesServices from "./clientesServices";
import produtosServices from "src/services/produtosServices";
import { ref } from "vue";

const jsonAPI = axios.create({
  baseURL: process.env.URL,
});
const services = {
  produtos: produtosServices,
  clientes: clientesServices,
  getProdutos: (callback) => {
    jsonAPI
      .get("produtos")
      .then((retorno) => {
        callback(retorno.data);
      })
      .catch((erro) => {
        Notify.create({
          message: erro.message,
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
        // this.mensagemErro(erro.message);
      });
  },
  mensagem: (msg) => {
    Notify.create({
      message: msg,
      color: "primary",
      position: "bottom",
      timeout: 3000,
    });
  },
  mensagemErro: (msg) => {
    Notify.create({
      message: msg,
      color: "negative",
      position: "bottom",
      timeout: 3000,
    });
  },
  validaCPF(cpf) {
    if (cpf.length !== 14) {
      return false;
    }
    if (cpf[3] !== "." || cpf[7] !== "." || cpf[11] !== "-") {
      return false;
    }
    return true;
  },
  setup() {
    return {
      value: ref(true),
    };
  },
};

export default services;
