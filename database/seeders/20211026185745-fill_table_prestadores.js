'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('prestadores', [
      {
        nome: 'Sem tomador',
        sobrenome: 'Sem Tomador',
        telefone: '000000000',
        email: '0@gmail.com',
        cpf_cnpj: '000',
        cep: '000',
        imagem_perfil: 'images/perfil-1.png',
        imagem_identidade: 'images/perfil-1.png',
        senha: bcrypt.hashSync('123456'),
        plano_id: 1,
        servico_id: 1
      },
      {
        nome: 'Jonas',
        sobrenome: 'Costa Alves',
        telefone: '31992823812',
        email: 'jonascosta@gmail.com',
        cpf_cnpj: '68507091000118',
        cep: '20050010',
        imagem_perfil: 'images/perfil-1.png',
        imagem_identidade: 'images/perfil-1.png',
        senha: bcrypt.hashSync('1234567'),
        plano_id: 2,
        servico_id: 1
      },
      {
        nome: 'Wesley',
        sobrenome: 'Sniper Dias',
        telefone: '77992823812',
        email: 'wesleysnipesdias@gmail.com',
        cpf_cnpj: '68407091000118',
        cep: '20040010',
        imagem_perfil: 'images/perfil-1.png',
        imagem_identidade: 'images/perfil-1.png',
        senha: bcrypt.hashSync('123456'),
        plano_id: 3,
        servico_id: 2
      },
      {
        nome: 'Matheus',
        sobrenome: 'Sniper Tudor',
        telefone: '31992823812',
        email: 'matheusnipestudor@gmail.com',
        cpf_cnpj: '78407091000118',
        cep: '30040010',
        imagem_perfil: 'images/perfil-1.png',
        imagem_identidade: 'images/perfil-1.png',
        senha: bcrypt.hashSync('123456*'),
        plano_id: 4,
        servico_id: 3
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('prestadores', null, {});
     
  }
};
