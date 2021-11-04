const { Plano } = require('../database/models');

const PlanoModel = {

  findAll: () => Plano.findAll().then((rows) => rows.map((row) => row.dataValues))
  
};

module.exports = PlanoModel;