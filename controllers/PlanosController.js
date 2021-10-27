const { findAll } = require('../models/plano');

exports.listarTodos = () => findAll();