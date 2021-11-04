const { findAll, findById } = require('../models/Servico');

exports.listarTodos = () => findAll();
exports.buscarServicoPorId = (id) => findById(id)