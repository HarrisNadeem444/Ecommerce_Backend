const sequelize = require("../../common/dbconnection")
const { DataTypes } = require("sequelize")

const category = sequelize.define('category',{
    categoryId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    categoryName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: true,
    paranoid: true,
})

module.exports = category;