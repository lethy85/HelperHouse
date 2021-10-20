module.exports = function(sequelize, DataTypes) {
    const Planos = sequelize.define({
        id: {
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
            type: DataTypes.INTERGER.UNSIGNED
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

    Planos.associate = models => {
    
        Planos.hasMany(models.Prestadores, {
          foreignKey: 'prestadores_id',
          as: 'prestadores'
        });
 
      };
    
      return Planos;

}