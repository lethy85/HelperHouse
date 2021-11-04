const { findAll } = require('../models/Status');

exports.listarTodos = () => findAll();