const { Servico } = require('../database/models');

const ServicoModel = {

  findAll: () => Servico.findAll().then((rows) => rows.map((row) => row.dataValues))
  
};

module.exports = ServicoModel;