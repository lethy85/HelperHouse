module.exports = function(sequelize, DataTypes) {
    const Servicos = sequelize.define({
        id: {
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
            type: DataTypes.INTERGER.UNSIGNED
        },
        descricao_servico: {
            type:DataTypes.STRING(11), 
            allowNull: false,
        }
        
    },{
        tableName: 'servicos',
        timestamps: false
      });

    Servicos.belongsTo(models.Pedidos, {
        foreignKey: 'pedidos_id',
        as: 'pedidos'
      });

    return Servicos;
    
}