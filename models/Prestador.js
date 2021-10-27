const { Prestador } = require('../database/models');

const PrestadorModel = {
  buscarUsuarioPorEmail: async (email) => {
    return await Prestador.findOne({ where:{ email }})
  },
  findById: (id) => Prestador.findByPk(id),
  findAll: () => Prestador.findAll(),
  criarUmPrestador: ({ nome, sobrenome, email, cpf_cnpj, endereco, imagem, senha}) => Prestador.create({ nome, sobrenome, email, cpf_cnpj, endereco, imagem, senha}),
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