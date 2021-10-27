module.exports = function(sequelize, DataTypes) {
    const Status = sequelize.define('Status', {
        id: {
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
            type: DataTypes.INTEGER.UNSIGNED
        },
        tipo_status: {
            type:DataTypes.STRING(45), 
            allowNull: false
        }
        
    },{
        tableName: 'status',
        timestamps: false
    });

    Status.associate = models => {
        Status.hasMany(models.Pedido, {
          foreignKey: 'status_id',
          as: 'pedidos'
        });
    }
    return Status;
}