const { Pedido } = require('../database/models');

const PedidoModel = {
  findById: (id) => Pedido.findByPk(id),
  findAll: () => Pedido.findAll(),
  criarUmPedido: async ({ descricao_solicitacao, descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, tomador_id }) => {
    return await Pedido.create({ descricao_solicitacao, descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, tomador_id })
  },
  update: async (id, { descricao_solicitacao, descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, tomador_id }) => {
    return await Pedido.update({ descricao_solicitacao, descricao_residencia, descricao_demanda, endereco, status_id, prestador_id, servico_id, tomador_id }, { where: { id } });
  },
  destroy: (id) => Pedido.destroy({ where: { id } })
};

module.exports = PedidoModel;