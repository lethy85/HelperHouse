'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('planos', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      tipo_plano: {
        type: Sequelize.STRING(45), 
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL(4,2), 
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('planos');
  }
};