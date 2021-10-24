const { v4 } = require("uuid");
const TomadoresModel = require("../models/Tomadores");

const TomadoresController = {
  buscarTomadoresPeloId: (id) => {
    try {
      const Tomadores = TomadoresModel.findById(id);

      return Tomadores;
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  listarTodos: () => TomadoresModel.findAll(),
  criarUmTomador: (nome, sobrenome, email, cpf, endereco, imagem, senha) => {
    console.log(nome)
    return TomadoresModel.criarUmTomador({ nome, sobrenome, email, cpf, endereco, imagem, senha })
  },
  editarUmTomador: (nome, sobrenome, email, cpf, endereco, imagem, senha) => {
    return TomadoresModel.update(id, {
        nome, 
        sobrenome, 
        email, 
        cpf, 
        endereco, 
        imagem, 
        senha
    });
  },
  deletarUmTomador: (id) => TomadoresModel.destroy(id),
};

module.exports = TomadoresController;