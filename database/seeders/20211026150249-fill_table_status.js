'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('status', [
      {
        tipo_status: 'Pendente'
      },
      {
        tipo_status: 'Aprovado'
      },
      {
        tipo_status: 'Cancelado'
      }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('status', null, {}); 
  }
};
