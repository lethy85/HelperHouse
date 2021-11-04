'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pedidos', [
      {
        descricao_residencia: "Casa",
        descricao_demanda: "Manutenção",
        descricao_solicitacao: "Conserto de dois canos na na cozinha da residência",
        endereco: "Rua Amália Prado, 75 Itapipoca, Belo Horizonte",
        status_id: 1,
        prestador_id:1 , 
        servico_id : 1, 
        tomador_id: 1
      },
      {
        descricao_residencia: "Apartamento",
        descricao_demanda: "Reforma",
        descricao_solicitacao: "Pintura de 6 cômodos de residência, somando 210 m² de parede",
        endereco: "Rua Serra, 25 Serra, Belo Horizonte",
        price: 95,
        status_id: 2,
        prestador_id:2 , 
        servico_id : 1, 
        tomador_id: 2
      },
      {
        descricao_residencia: "Casa",
        descricao_demanda: "Reforma",
        descricao_solicitacao: "Troca de piso",
        endereco: "Rua da Rossinha, 25 Valinhos, Belo Horizonte",
        price: 100,
        status_id: 2,
        prestador_id:2 , 
        servico_id : 1, 
        tomador_id: 2
      },
      {
        descricao_residencia: "Casa",
        descricao_demanda: "Manutenção",
        descricao_solicitacao: "Troca de piso 6m2",
        endereco: "Rua da Rossinha, 25 Valinhos, Belo Horizonte",
        price: 90,
        status_id: 2,
        prestador_id:2 , 
        servico_id : 1, 
        tomador_id: 2
      },
      {
        descricao_residencia: "Casa",
        descricao_demanda: "Reforma",
        descricao_solicitacao: "Pintura de 6 cômodos de residência, somando 210 m² de parede",
        endereco: "Rua da Albita, 25 Valinhos, Belo Horizonte",
        price: 60,
        status_id: 2,
        prestador_id:2 , 
        servico_id : 1, 
        tomador_id: 2
      },
      {
        descricao_residencia: "Apartamento",
        descricao_demanda: "Reforma",
        descricao_solicitacao: "Pintura de 6 cômodos de residência, somando 210 m² de parede",
        endereco: "Rua da Rossinha, 25 Valinhos, Belo Horizonte",
        price: 60,
        status_id: 2,
        prestador_id:2 , 
        servico_id : 1, 
        tomador_id: 2
      },
      {
        descricao_residencia: "Casa",
        descricao_demanda: "Manutenção",
        descricao_solicitacao: "Pintura de 6 cômodos de residência, somando 210 m² de parede",
        endereco: "Rua da Rossinha, 25 Valinhos, Belo Horizonte",
        price: 30,
        status_id: 2,
        prestador_id:2 , 
        servico_id : 1, 
        tomador_id: 2
      },
      {
        descricao_residencia: "Apartamento",
        descricao_demanda: "Manutenção",
        descricao_solicitacao: "Intalação de 8 tomadas em 2 cômodos d residência",
        endereco: "Rua da Salinha, 210 Cascavel, Belo Horizonte",
        price: 30,
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