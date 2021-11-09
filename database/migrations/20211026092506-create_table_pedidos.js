'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pedidos', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      descricao_residencia: {
        type:Sequelize.STRING(45), 
        allowNull: false
      },
      price: {
        type:Sequelize.DECIMAL(7,2), 
        allowNull: true
      },
      descricao_demanda: {
        type:Sequelize.STRING(45), 
        allowNull: false
      },
      descricao_solicitacao: {
          type:Sequelize.STRING(240), 
          allowNull: false
      },
      endereco: {
          type:Sequelize.STRING(150), 
          allowNull: false
      },
      status_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'status',
            key: 'id'
          }
      },
      prestador_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'prestadores',
            key: 'id'
          }
      },
      servico_id : {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'servicos',
            key: 'id'
          }
      },
      tomador_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'tomadores',
            key: 'id'
          }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pedidos');
  }
};