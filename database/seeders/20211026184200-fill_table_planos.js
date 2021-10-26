'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('planos', [
      {
        tipo_plano: 'Assinatura Basic',
        valor: 50.00
      },
      {
        tipo_plano: 'Assinatura Intermediate',
        valor: 70.00
      },
      {
        tipo_plano: 'Assinatura PRO',
        valor: 90.00
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('planos', null, {});
  }
};
