module.exports = function(sequelize, DataTypes) {
    const Servico = sequelize.define({
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

    Servico.associate = model => {

        Servico.hasMany(models.Pedidos, {
            foreignKey: 'servico_id',
            as: 'pedidos'
        });
    }

    return Servico;
    
}