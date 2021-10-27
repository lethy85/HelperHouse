const bcrypt =  require('bcryptjs')
const PrestadorModel = require("../models/Prestador");

const PrestadorController = {
  logIn: async ({ email, senha }) => {
    const usuarioEncontrado = await PrestadorModel.buscarUsuarioPorEmail(email)
    if (!usuarioEncontrado) {
      throw new Error("Não existe usuário com esse email!");
    }
    const senhaVerificada = bcrypt.compare(senha, usuarioEncontrado.senha);
    if (!senhaVerificada) {
      throw new Error('Falha no login, senha inválida');      
    }
    return usuarioEncontrado;
  },
  buscarPrestadorPeloId: (id) => {
    try {
      const Prestador = PrestadorModel.findById(id);

      return Prestador;
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  listarTodos: () => PrestadorModel.findAll(),
  criarUmPrestador: (nome, sobrenome, email, cpf_cnpj, endereco, imagem, senha) => {
    console.log(nome)
    return PrestadorModel.criarUmPrestador({ nome, sobrenome, email, cpf_cnpj, endereco, imagem, senha })
  },
  editarUmPrestador: (nome, sobrenome, email, cpf_cnpj, endereco, imagem, senha) => {
    return PrestadorModel.update(id, {
        nome, 
        sobrenome, 
        email, 
        cpf_cnpj, 
        endereco, 
        imagem, 
        senha
    });
  },
  deletarUmPrestador: (id) => PrestadorModel.destroy(id),
};

module.exports = PrestadorController;