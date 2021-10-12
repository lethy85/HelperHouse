const pedidos = require("./pedidos");
const servicos = require("./servicos");

module.exports = function(sequelize, DataTypes) {
    const PedidosServicos = sequelize.define({
        servico_id: {
            type:DataTypes.INTERGER.UNSIGNED,
            references: {model: servicos, key: 'id'}
        },
        pedido_id: {
            type:DataTypes.INTERGER.UNSIGNED, 
            references: {model: pedidos, key: 'id'}
        },
    });
    
    return PedidosServicos;
}