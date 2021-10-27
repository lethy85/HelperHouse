const { Servicos } = require('../database/models');

const ServicosModel = {

  findAll: () => Servicos.findAll()
  
};

module.exports = ServicosModel;