const sequelize = require("../../common/dbconnection")
const { DataTypes } = require("sequelize")

const product = sequelize.define('product',{
    productId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    productName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    productDescription:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    inventory:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    timestamps: true,
    paranoid: true,
})

module.exports = product;