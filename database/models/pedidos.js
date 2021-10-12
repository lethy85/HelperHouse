const status = require("./status");

module.exports = function(sequelize, DataTypes) {
    const Pedidos = sequelize.define({
        id: {
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
            type: DataTypes.INTERGER.UNSIGNED
        },
        descricao_residencia: {
            type:DataTypes.STRING(45), 
            allowNull: false
        },
        descricaLocalo_demanda: {
            type:DataTypes.STRING9(240), 
            allowNull: false
        },
        endereco: {
            type:DataTypes.STRING(45), 
            allowNull: false
        },
        status_id: {
            type:DataTypes.INTERGER.UNSIGNED, 
            references: {model: status, key: 'id'}
        }
    });
    return Pedidos;
}