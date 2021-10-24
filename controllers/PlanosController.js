const { findAll } = require('../models/planos');

exports.listarTodos = () => findAll();