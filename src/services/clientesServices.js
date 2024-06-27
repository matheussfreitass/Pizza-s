import axios from "axios";
import { useQuasar } from "quasar";
import { ref } from "vue";
const jsonAPIClientes = axios.create({
  baseURL: process.env.URL,
});

const clientesServices = {
  saveCliente(cliente) {
    jsonAPIClientes
      .post("clientes", cliente)
      .then((retorno) => {
        console.log(retorno);
      })
      .catch((erro) => {
        console.log(erro);
      });
  },
};

export default clientesServices;
