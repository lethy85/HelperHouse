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
  criarUmPrestador: async ({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, confsenha, imagem_perfil, imagem_identidade }) => {
    if (senha !== confsenha) {
      throw new Error("As senhas não conferem");
    }
    senha = bcrypt.hashSync(senha)
    console.log({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, confsenha, imagem_perfil, imagem_identidade })
    console.log({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, confsenha, imagem_perfil, imagem_identidade })
    return await PrestadorModel.criarUmPrestador({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, imagem_perfil, imagem_identidade, plano_id: 1 })
  },
  editarUmPrestador: async ({ id, nome, sobrenome, email, cpf_cnpj, cep, imagem_perfil, senha, confsenha }) => {
    if (senha !== confsenha) {
      throw new Error("As senhas não conferem");
    }
    senha = bcrypt.hashSync(senha)
    return await PrestadorModel.update(id, {
        nome, 
        sobrenome, 
        email,
        cep, 
        cpf_cnpj,
        imagem_perfil, 
        senha
    });
  },
  deletarUmPrestador: (id) => PrestadorModel.destroy(id),
};

module.exports = PrestadorController;