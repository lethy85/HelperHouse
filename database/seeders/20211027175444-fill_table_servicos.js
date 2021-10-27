'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('servicos', [
      {
        
        descricao_servico: 'Servico de encanador',
        servico_id: 1
      },
      {
        descricao_servico: 'Servico de pintor',
        servico_id: 2 
      },
      {
        descricao_servico: 'Servico de eletricista',
        servico_id: 3
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('servicos', null, {});
     
  }
};
