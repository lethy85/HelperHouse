const { Tomadores } = require('../database/models');

const TomadoresModel = {
  findById: (id) => Tomadores.findByPk(id),
  findAll: () => Tomadores.findAll(),
  criarUmTomador: ({ nome, sobrenome, email, cpf, endereco, imagem, senha}) => Tomadores.create({ nome, sobrenome, email, cpf, endereco, imagem, senha }),
  update: (id, { nome, sobrenome, email, cpf, endereco, imagem, senha }) => {
    return Tomadores.update({
      nome, 
      sobrenome, 
      email, 
      cpf, 
      endereco, 
      imagem, 
      senha
    }, { where: { id } });
  },
  destroy: (id) => Tomadores.destroy({ where: { id } })
};

module.exports = TomadoresModel;
  