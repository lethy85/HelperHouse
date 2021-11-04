'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prestadores', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      sobrenome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      data_inicio: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(120),
        allowNull: false,
        unique: true
      },
      cpf_cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true
      },
      cep: {
        type: Sequelize.CHAR(8), 
        allowNull: false
      },
      imagem_perfil: {
        type: Sequelize.STRING(150), 
        allowNull: false
      },
      imagem_identidade: {
        type: Sequelize.STRING(150), 
        allowNull: false
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING(16)
      },
      plano_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'planos',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      servico_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'servicos',
          key: 'id'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('prestadores');
  }
};