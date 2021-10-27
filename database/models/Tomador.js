module.exports = function(sequelize, DataTypes) {
    const Tomador = sequelize.define('Tomador', {
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
        email: {
            type:DataTypes.STRING(120), 
            allowNull: false,
            unique: true
        },
        cpf: {
            type:DataTypes.STRING(11), 
            allowNull: false,
            unique: true
        },
        endereco: {
            type:DataTypes.STRING(150), 
            allowNull: false
        },
        senha: {
            allowNull: false,
            type: DataTypes.STRING(16)
        }
    },{
        tableName: 'tomadores',
        timestamps: false
    });

    Tomador.associate = models => {
        Tomador.hasMany(models.Pedido, {
            foreignKey: 'tomador_id',
            as: 'pedidos'
        });
    }
    
    return Tomador;
}