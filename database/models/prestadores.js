const pedidos = require("../database/models/pedidos");
const planos = require("../database/models/planos");

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
        },
        plano_id: {
            type:DataTypes.INTERGER.UNSIGNED,
            references: {model: planos, key: 'id'}
        },
        pedido_id: {
            type:DataTypes.INTERGER.UNSIGNED, 
            references: {model: pedidos, key: 'id'}
        }
    },
    {
        tableName: 'prestadores',
        timestamps: false
    });
    
    return Prestadores;
}