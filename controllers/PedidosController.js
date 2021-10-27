const { v4 } = require("uuid");
const PedidoModel = require("../models/Pedido");

const PedidoController = {
  buscarPedidoPeloId: (id) => {
    try {
      const Pedido = PedidoModel.findById(id);

      return Pedido;
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  listarTodos: () => PedidoModel.findAll(),
  criarUmTomador: (descricao_residencia, descricaLocalo_demanda, endereco) => {
    console.log(nome)
    return PedidoModel.criarUmTomador({ descricao_residencia, descricaLocalo_demanda, endereco })
  },
  editarUmTomador: (descricao_residencia, descricaLocalo_demanda, endereco) => {
    return PedidoModel.update(id, {
        descricao_residencia, 
        descricaLocalo_demanda, 
        endereco
    });
  },
  deletarUmTomador: (id) => PedidoModel.destroy(id),
};

module.exports = PedidoController;