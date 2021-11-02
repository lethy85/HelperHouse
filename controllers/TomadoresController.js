const bcrypt = require('bcryptjs')
const TomadorModel = require("../models/Tomador");

const TomadorController = {
  logIn: async ({ email, senha }) => {
    const usuarioEncontrado = await TomadorModel.buscarUsuarioPorEmail(email)
    if (!usuarioEncontrado) {
      throw new Error("Não existe usuário com esse email!");
    }
    const senhaVerificada = bcrypt.compare(senha, usuarioEncontrado.senha);
    if (!senhaVerificada) {
      throw new Error('Falha no login, senha inválida');      
    }
    return usuarioEncontrado;
  },
  buscarTomadorPeloId: (id) => {
    try {
      const Tomador = TomadorModel.findById(id);

      return Tomador;
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  listarTodos: () => TomadorModel.findAll(),
  criarUmTomador: ({ nome, sobrenome, email, cpf, endereco, senha }) => {
    console.log({ nome, sobrenome, email, cpf, endereco, senha })
    senha = bcrypt.hashSync(senha)
    return TomadorModel.criarUmTomador({ nome, sobrenome, email, cpf, endereco, senha })
  },
  editarUmTomador: async ({ id, nome, sobrenome, email, cpf, endereco, senha }) => {
    console.log({ id, nome, sobrenome, email, cpf, endereco, senha })
    return await TomadorModel.update(id, {
        nome, 
        sobrenome, 
        email, 
        cpf, 
        endereco,  
        senha
    });
  },
  deletarUmTomador: (id) => TomadorModel.destroy(id),
};

module.exports = TomadorController;