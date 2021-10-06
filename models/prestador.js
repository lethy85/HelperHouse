const db = require("../database/prestador");

exports.cadastrarPrestador = ({nome, sobrenome, email, senha, confsenha, endereco, CEP, telefone, registro, foto, ident}) => 
    db.Prestador.create({nome, sobrenome, email, senha, confsenha, endereco, CEP, telefone, registro, foto, ident});