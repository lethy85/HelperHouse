const { v4 } = require("uuid");
const PedidosModel = require("../models/Pedidos");

const PedidosController = {
  buscarPedidosPeloId: (id) => {
    try {
      const Pedidos = PedidosModel.findById(id);

      return Pedidos;
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  listarTodos: () => PedidosModel.findAll(),
  criarUmTomador: (descricao_residencia, descricaLocalo_demanda, endereco) => {
    console.log(nome)
    return PedidosModel.criarUmTomador({ descricao_residencia, descricaLocalo_demanda, endereco })
  },
  editarUmTomador: (descricao_residencia, descricaLocalo_demanda, endereco) => {
    return PedidosModel.update(id, {
        descricao_residencia, 
        descricaLocalo_demanda, 
        endereco
    });
  },
  deletarUmTomador: (id) => PedidosModel.destroy(id),
};

module.exports = PedidosController;