const db = require("../database/tomador");

exports.cadastrarTomador = ({nome, sobrenome, email, telefone, endereco, senha, confsenha}) => 
    db.Tomador.create({nome, sobrenome, email, telefone, endereco, senha, confsenha});