const { findAll } = require('../models/Servico');

exports.listarTodos = () => findAll();