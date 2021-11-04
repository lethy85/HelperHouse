const { Status } = require('../database/models');

const StatusModel = {

  findAll: () => Status.findAll().then((rows) => rows.map((row) => row.dataValues))
  
};

module.exports = StatusModel;