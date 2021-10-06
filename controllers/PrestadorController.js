const prestadorModel = require('../models/prestador');

exports.cadastrarPrestador = ({nome, sobrenome, email, senha, confsenha, endereco, CEP, telefone, registro, foto, ident}) => prestadorModel.cadastrarPrestador({nome, sobrenome, email, senha, confsenha, endereco, CEP, telefone, registro, foto, ident});
