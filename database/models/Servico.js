module.exports = function(sequelize, DataTypes) {
    const Servico = sequelize.define('Servico', {
        id: {
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
            type: DataTypes.INTEGER.UNSIGNED
        },
        descricao_servico: {
            type:DataTypes.STRING(11), 
            allowNull: false,
        }
        
    },{
        tableName: 'servicos',
        timestamps: false
      });

    Servico.associate = models => {
        Servico.hasMany(models.Pedido, {
            foreignKey: 'servico_id',
            as: 'pedidos'
        });
        Servico.hasMany(models.Prestador, {
            foreignKey: 'servico_id',
            as: 'prestadores'
        });
    }

    return Servico;
    
}