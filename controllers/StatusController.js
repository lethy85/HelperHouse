const { findAll } = require('../models/status');

exports.listarTodos = () => findAll();