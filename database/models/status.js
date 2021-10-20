module.exports = function(sequelize, DataTypes) {
    const Status = sequelize.define({
        id: {
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
            type: DataTypes.INTERGER.UNSIGNED
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
        Status.belongsTo(models.Pedidos, {
          as: 'orders',
          foreignKey: 'status_id'
        });
    }

    return Status;
}