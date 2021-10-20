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

<<<<<<< HEAD
<<<<<<< HEAD
    Status.belongsTo(models.Pedidos, {
        foreignKey: 'pedidos_id',
        as: 'pedidos'
      });
=======
=======
>>>>>>> 295d6e2d8f0c2e2621a9a9caf71a0465203b5248
    Status.associate = models => {
        Status.belongsTo(models.Pedidos, {
          as: 'orders',
          foreignKey: 'status_id'
        });
    }
<<<<<<< HEAD
>>>>>>> 295d6e2d8f0c2e2621a9a9caf71a0465203b5248
=======
>>>>>>> 295d6e2d8f0c2e2621a9a9caf71a0465203b5248

    return Status;
    

}