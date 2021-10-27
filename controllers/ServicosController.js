const { findAll } = require('../models/servico');

exports.listarTodos = () => findAll();