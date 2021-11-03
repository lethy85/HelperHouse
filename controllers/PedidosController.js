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
  criarUmPedido: async ({ descricao_solicitacao, descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, tomador_id }) => {
    return await PedidoModel.criarUmPedido({ descricao_solicitacao, descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, tomador_id })
  },
  editarUmPedido: ({ descricao_solicitacao, descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, tomador_id }) => {
    return PedidoModel.update(id, { descricao_solicitacao, descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, tomador_id });
  },
  deletarUmPedido: (id) => PedidoModel.destroy(id),
};

module.exports = PedidoController;