'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('servicos', [
      {
        descricao_servico: 'Servico de Eletricista'
      },
      {
        descricao_servico: 'Servico de Encanador'
      },
      {
        descricao_servico: 'Servico de Pintor'
      }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('servicos', null, {}); 
  }
};
