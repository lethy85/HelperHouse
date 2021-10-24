const { Planos } = require('../database/models');

const PlanosModel = {

  findAll: () => Planos.findAll()
  
};

module.exports = PlanosModel;