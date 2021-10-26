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
          foreignKey: 'status_id',
          as: 'pedidos'
        });
    }
    return Status;
}