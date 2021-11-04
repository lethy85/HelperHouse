const { Status } = require('../database/models');

const StatusModel = {
  findById: (id) => Status.findByPk(id),
  findAll: () => Status.findAll().then((rows) => rows.map((row) => row.dataValues))
  
};

module.exports = StatusModel;