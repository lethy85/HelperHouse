const { Prestadores } = require('../database/models');

const PrestadoresModel = {
  findById: (id) => Prestadores.findByPk(id),
  findAll: () => Prestadores.findAll(),
  criarUmPrestador: ({ nome, sobrenome, email, cpf_cnpj, endereco, imagem, senha}) => Prestadores.create({ nome, sobrenome, email, cpf_cnpj, endereco, imagem, senha}),
  update: (id, { nome, sobrenome, email, cpf_cnpj, endereco, imagem, senha }) => {
    return Prestadores.update({
      nome, 
      sobrenome, 
      email, 
      cpf_cnpj, 
      endereco, 
      imagem,   
      senha
    }, { where: { id } });
  },
  destroy: (id) => Prestadores.destroy({ where: { id } })
};

module.exports = PrestadoresModel;