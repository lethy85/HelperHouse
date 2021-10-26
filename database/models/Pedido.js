module.exports = function(sequelize, DataTypes) {
    const Pedido = sequelize.define({
        id: {
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
            type: DataTypes.INTEGER.UNSIGNED
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
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        prestador_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        servico_id : {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        tomador_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    },{
        tableName: 'pedidos',
        timestamps: false
    });

    // Relações   

    Pedido.associate = models => {
        Pedido.belongsTo(models.Status, {
            foreignKey: 'status_id',
            as: 'status'
        });
        Pedido.belongsTo(models.Prestadores, {
            foreignKey: 'prestador_id',
            as: 'prestadores'
        });
        Pedido.belongsTo(models.Servicos, {
            foreignKey: 'servico_id',
            as: 'servicos'
        });
        Pedido.belongsTo(models.Tomadores, {
            foreignKey: 'tomador_id',
            as: 'tomadores'
        });
    }
    return Pedido;
}