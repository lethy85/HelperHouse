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
        }
    },{
        tableName: 'pedidos',
        timestamps: false
    });

    // Relações   

    Pedidos.associate = models => {
        Pedidos.belongsTo(models.Status, {
            foreignKey: 'status_id',
            as: 'status'
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