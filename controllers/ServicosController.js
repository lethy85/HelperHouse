const { findAll } = require('../models/servicos');

exports.listarTodos = () => findAll();