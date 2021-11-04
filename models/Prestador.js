const { Prestador } = require('../database/models');

const PrestadorModel = {
  buscarUsuarioPorEmail: async (email) => {
    return await Prestador.findOne({ where:{ email }})
  },
  findById: (id) => Prestador.findByPk(id),
  findAll: () => Prestador.findAll().then((rows) => rows.map((row) => row.dataValues)),
  criarUmPrestador: async ({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, imagem_perfil, imagem_identidade, plano_id }) => {
    console.log({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, imagem_perfil, imagem_identidade, plano_id })
    return await Prestador.create({ nome, sobrenome, email, cep, cpf_cnpj, telefone, senha, imagem_perfil, imagem_identidade, plano_id })
   },
  update: async (id, { nome, sobrenome, email, cep, cpf_cnpj, imagem_perfil, senha }) => {
    return await Prestador.update({
      nome, 
      sobrenome, 
      email,
      cep, 
      cpf_cnpj, 
      imagem_perfil,
      senha
    }, { where: { id } });
  },
  destroy: (id) => Prestador.destroy({ where: { id } })
};

module.exports = PrestadorModel;