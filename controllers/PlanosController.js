const { findAll } = require('../models/Plano');

exports.listarTodos = () => findAll();