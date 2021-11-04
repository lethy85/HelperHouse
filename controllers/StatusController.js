const { findAll, findById } = require('../models/Status');

exports.listarTodos = () => findAll();

exports.buscarStatusPeloId = (id) => {
    try {
      return findById(id);
    } catch (error) {
      return res.status(400).json({ error });
    }
}