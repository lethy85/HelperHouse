'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tomadores', { 
      id: {
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false, 
        type: Sequelize.INTERGER.UNSIGNED
      },
      nome: {
          type:Sequelize.STRING(100), 
          allowNull: false
      },
      sobrenome: {
          type:Sequelize.STRING(100), 
          allowNull: false
      },
      email: {
          type:Sequelize.STRING(120), 
          allowNull: false,
          unique: true
      },
      cpf: {
          type:Sequelize.STRING(11), 
          allowNull: false,
          unique: true
      },
      endereco: {
          type:Sequelize.STRING(150), 
          allowNull: false
      },
      imagem: {
          type:Sequelize.STRING(150), 
          unique: true
      },
      senha: {
          allowNull: false,
          type: Sequelize.STRING(16)
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Status');
  }
};
