const sequelize = require("../../common/dbconnection");
const { DataTypes } = require("sequelize");

const cart = sequelize.define(
  "cart",
  {
    cartId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    cartName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = cart;
