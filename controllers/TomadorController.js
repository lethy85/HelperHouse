const tomadorModel = require('../models/tomador');

exports.cadastrarTomador = ({nome, sobrenome, email, telefone, endereco, senha, confsenha}) =>
    tomadorModel.cadastrarTomador({nome, sobrenome, email, telefone, endereco, senha, confsenha});