const { Prestador } = require('../database/models');

const PrestadorModel = {
  buscarUsuarioPorEmail: async (email) => {
    return await Prestador.findOne({ where:{ email }})
  },
  findById: (id) => Prestador.findByPk(id),
  findAll: () => Prestador.findAll(),
  criarUmPrestador: async ({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, imagem_perfil, imagem_identidade, plano_id }) => {
    console.log({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, imagem_perfil, imagem_identidade, plano_id })
    return await Prestador.create({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, imagem_perfil, imagem_identidade, plano_id })
   },
  update: (id, { nome, sobrenome, email, cpf_cnpj, endereco, imagem, senha }) => {
    return Prestador.update({
      nome, 
      sobrenome, 
      email, 
      cpf_cnpj, 
      endereco, 
      imagem,   
      senha
    }, { where: { id } });
  },
  destroy: (id) => Prestador.destroy({ where: { id } })
};

module.exports = PrestadorModel;