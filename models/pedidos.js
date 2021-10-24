const { Pedidos } = require('../database/models');

const PedidosModel = {
  findById: (id) => Pedidos.findByPk(id),
  findAll: () => Pedidos.findAll(),
  criarUmPedido: ({ descricao_residencia, descricaLocalo_demanda, endereco}) => Pedidos.create({ descricao_residencia, descricaLocalo_demanda, endereco}),
  update: (id, { descricao_residencia, descricaLocalo_demanda, endereco }) => {
    return Pedidos.update({
        
        descricao_residencia,
        descricaLocalo_demanda,
        endereco

    }, { where: { id } });
  },
  destroy: (id) => Pedidos.destroy({ where: { id } })
};

module.exports = PedidosModel;