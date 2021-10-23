module.exports = function(sequelize, DataTypes) {
    const Prestadores = sequelize.define({
        id: {
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
            type: DataTypes.INTERGER.UNSIGNED
        },
        nome: {
            type:DataTypes.STRING(100), 
            allowNull: false
        },
        sobrenome: {
            type:DataTypes.STRING(100), 
            allowNull: false
        },
        telefone: {
            type:DataTypes.STRING(11), 
            allowNull: false,
        },
        email: {
            type:DataTypes.STRING(120), 
            allowNull: false,
            unique: true
        },
        cpf_cnpj: {
            type:DataTypes.STRING(14), 
            allowNull: false,
            unique: true
        },
        cep: {
            type:DataTypes.STRING(8), 
            allowNull: false
        },
        senha: {
            allowNull: false,
            type: DataTypes.STRING(16)
        }
    },
    {
        tableName: 'prestadores',
        timestamps: false
    });

    Prestadores.associate = models => {
    
        Prestadores.belongsTo(models.Planos, {
          foreignKey: 'planos_id',
          as: 'planos'
        });
    
        Prestadores.hasMany(models.Pedidos, {
          foreignKey: 'pedidos_id',
          as: 'pedidos'
        })
    
    };
    
    return Prestadores;
}