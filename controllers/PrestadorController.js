const bcrypt = require('bcryptjs')
const prestadorModel = require('../models/prestadorModels');

exports.cadastrarPrestador = ({nome, sobrenome, email, senha, confsenha, endereco, CEP, telefone, registro, foto, ident}) => prestadorModel.cadastrarPrestador({nome, sobrenome, email, senha, confsenha, endereco, CEP, telefone, registro, foto, ident});
