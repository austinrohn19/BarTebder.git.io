const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// create our User model
class Inventory extends Model {
}

Inventory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        size: {
            type: DataTypes.STRING,
            allowNull: false

        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        type: {
            type: DataTypes.STRING,
            allowNull: false

        },
        wholesale_price: {
            type: DataTypes.DECIMAL,
            allowNull: false

        },
        retail_price: {
            type: DataTypes.DECIMAL,
            allowNull: false

        },
        bar_price: {
            type: DataTypes.DECIMAL,
            allowNull: false

        },
        cost: {
            type: DataTypes.DECIMAL,
            allowNull: false

        },
        profit: {
            type: DataTypes.DECIMAL,
            allowNull: false

        },
        drink_price: {
            type: DataTypes.DECIMAL,
            allowNull: false

        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Inventory'
    }
);

module.exports = Inventory;
