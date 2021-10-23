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
        Status.hasMany(models.Pedidos, {
          as: 'pedidos',
          foreignKey: 'pedidos_id'
        });
    }
    return Status;
}