const { Servico } = require('../database/models');

const ServicoModel = {
  findById: (id) => Servico.findByPk(id),
  findAll: () => Servico.findAll().then((rows) => rows.map((row) => row.dataValues))
  
};

module.exports = ServicoModel;