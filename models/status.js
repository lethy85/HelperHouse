const { Status } = require('../database/models');

const StatusModel = {

  findAll: () => Status.findAll()
  
};

module.exports = StatusModel;