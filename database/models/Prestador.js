module.exports = function(sequelize, DataTypes) {
    const Prestador = sequelize.define('Prestador', {
        id: {
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
            type: DataTypes.INTEGER.UNSIGNED
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
        imagem_perfil: {
            type:DataTypes.STRING(150), 
            allowNull: false
        },
        imagem_identidade: {
            type:DataTypes.STRING(150), 
            allowNull: false
        },
        senha: {
            allowNull: false,
            type: DataTypes.STRING(16)
        },
        plano_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    },
    {
        tableName: 'prestadores',
        timestamps: false
    });

    Prestador.associate = models => {
    
        Prestador.belongsTo(models.Plano, {
          foreignKey: 'plano_id',
          as: 'planos'
        });

        Prestador.belongsTo(models.Servico, {
            foreignKey: 'servico_id',
            as: 'servicos'
          });

        Prestador.hasMany(models.Pedido, {
            foreignKey: 'prestador_id',
            as: 'pedidos'
        });
    
    };
    
    return Prestador;
}