'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pedidos', [
      {
        descricao_residencia: "Casa",
        descricaLocalo_demanda: "Conserto de dois canos na na cozinha da residência",
        endereco: "Rua Amália Prado, 75 Itapipoca, Belo Horizonte",
        status_id: 1,
        prestador_id:1 , 
        servico_id : 1, 
        tomador_id: 1
      },
      {
        descricao_residencia: "Casa",
        descricaLocalo_demanda: "Pintura de 6 cômodos de residência, somando 210 m² de parede",
        endereco: "Rua da Rossinha, 25 Valinhos, Belo Horizonte",
        status_id: 2,
        prestador_id:2 , 
        servico_id : 2, 
        tomador_id: 2
      },
      {
        descricao_residencia: "Apartamento",
        descricaLocalo_demanda: "Intalação de 8 tomadas em 2 cômodos d residência",
        endereco: "Rua da Salinha, 210 Cascavel, Belo Horizonte",
        status_id: 3,
        prestador_id:3 , 
        servico_id : 3, 
        tomador_id: 3
      }
     
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pedidos', null, {}); 
  }
};