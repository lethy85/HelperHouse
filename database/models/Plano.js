module.exports = function(sequelize, DataTypes) {
    const Plano = sequelize.define({
        id: {
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
            type: DataTypes.INTEGER.UNSIGNED
        },
        tipo_plano: {
            type:DataTypes.STRING(45), 
            allowNull: false,
        },
        valor: {
            type:DataTypes.DECIMAL(4,2), 
            allowNull: false,
        }
    },{
        tableName: 'planos',
        timestamps: false
      });

    Plano.associate = models => {
    
        Plano.hasMany(models.Prestadores, {
          foreignKey: 'plano_id',
          as: 'prestadores'
        });
 
    };
    
    return Plano;

}