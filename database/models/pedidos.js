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
            type:DataTypes.STRING(240), 
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

    // Relações   

    Pedidos.associate = models => {
        Pedidos.belongsTo(models.Status, {
            foreignKey: 'Status_id',
            as: 'Status'
        });
        Pedidos.belongsTo(models.Prestadores, {
            foreignKey: 'prestadores_id',
            as: 'prestadores'
        });
        Pedidos.belongsTo(models.Servicos, {
            foreignKey: 'servicos_id',
            as: 'servicos'
        });
        Pedidos.belongsTo(models.Tomadores, {
            foreignKey: 'tomadores_id',
            as: 'tomadores'
        });
    }
    return Pedidos;
}