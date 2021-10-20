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
        }
    },{
        tableName: 'pedidos',
        timestamps: false
    });

    Pedidos.associate = models => {
        Pedidos.belongsTo(models.Status, {
          as: 'status',
          foreignKey: 'status_id'
        });
    }
    return Pedidos;
}