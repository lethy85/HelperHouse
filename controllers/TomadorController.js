const bcrypt = require('bcryptjs')
const tomadorModel = require('../models/tomador');

exports.cadastrarTomador = ({nome, sobrenome, email, telefone, endereco, senha}) =>
    tomadorModel.cadastrarTomador({nome, sobrenome, email, telefone, endereco, senha});