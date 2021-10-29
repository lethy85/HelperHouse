const { Tomador } = require('../database/models');

const TomadorModel = {
  buscarUsuarioPorEmail: async (email) => {
    return await Tomador.findOne({ where:{ email }})
  },
  findById: (id) => Tomador.findByPk(id),
  findAll: () => Tomador.findAll(),
  criarUmTomador: async ({ nome, sobrenome, email, cpf, endereco, senha }) => {
    return await Tomador.create({ nome, sobrenome, email, cpf, endereco, senha })
  },
  update: (id, { nome, sobrenome, email, cpf, endereco, imagem, senha }) => {
    return Tomador.update({
      nome, 
      sobrenome, 
      email, 
      cpf, 
      endereco, 
      imagem, 
      senha
    }, { where: { id } });
  },
  destroy: (id) => Tomador.destroy({ where: { id } })
};

module.exports = TomadorModel;
  