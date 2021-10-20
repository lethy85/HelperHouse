module.exports = (sequelize, DataTypes) => {
    const Pedidos_servicos = sequelize.define(
        'Pedidos_Servicos', {

             }
        
    )

    // Relações   

    Pedidos.associate = models => {
        Pedidos.hasMany(models.Pedidos, {
            foreignKey: 'Pedidos_id',
            as: 'pedidos'
        });
    },
    Pedidos.associate = models => {
        Pedidos.hasMany(models.Servicos, {
            foreignKey: 'Pedidos_id',
            as: 'pedidos'
        });
    }