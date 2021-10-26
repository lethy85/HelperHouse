'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tomadores', [
      {
        nome: 'Jo',
        sobrenome: 'Soares',
        email: 'josoares@gmail.com',
        cpf: '98508728390',
        endereco: 'Rua dos Amores, 210, Lourdes, Belo Horizonte',
        senha: bcrypt.hashSync('1234567')
      },
      {
        nome: 'Jojo',
        sobrenome: 'Todynho',
        email: 'jotodynho@gmail.com',
        cpf: '99908728390',
        endereco: 'Rua dos Amores, 200, Lourdes, Belo Horizonte',
        senha: bcrypt.hashSync('123456')
      },
      {
        nome: 'Gossip',
        sobrenome: 'Do Dia',
        email: 'gossipdodia@gmail.com',
        cpf: '89508728390',
        endereco: 'Rua dos Amores, 310, Lourdes, Belo Horizonte',
        senha: bcrypt.hashSync('123457')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tomadores', null, {});
     
  }
};
