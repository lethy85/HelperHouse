const { v4 } = require("uuid");
const PrestadoresModel = require("../models/Prestadores");

const PrestadoresController = {
  buscarPrestadoresPeloId: (id) => {
    try {
      const Prestadores = PrestadoresModel.findById(id);

      return Prestadores;
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  listarTodos: () => PrestadoresModel.findAll(),
  criarUmPrestador: (nome, sobrenome, email, cpf_cnpj, endereco, imagem, senha) => {
    console.log(nome)
    return PrestadoresModel.criarUmPrestador({ nome, sobrenome, email, cpf_cnpj, endereco, imagem, senha })
  },
  editarUmPrestador: (nome, sobrenome, email, cpf_cnpj, endereco, imagem, senha) => {
    return PrestadoresModel.update(id, {
        nome, 
        sobrenome, 
        email, 
        cpf_cnpj, 
        endereco, 
        imagem, 
        senha
    });
  },
  deletarUmPrestador: (id) => PrestadoresModel.destroy(id),
};

module.exports = PrestadoresController;