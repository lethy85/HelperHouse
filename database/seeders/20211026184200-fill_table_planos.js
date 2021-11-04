'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('planos', [
      {
        tipo_plano: 'Assinatura Grátis',
        valor: 0
      },
      {
        tipo_plano: 'Assinatura Basic',
        valor: 2.00
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('planos', null, {});
  }
};
