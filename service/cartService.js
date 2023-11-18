const { models } = require("../models");
// const bcrypt = require("bcryptjs");
//Db operations
module.exports = {
  getCart: async () => {
    const carts = await models.cart.findAll();
    return carts;
  },
  addCart: async (data) => {
    // data.password = bcrypt.hashSync(data.password, 10);
    const carts = await models.cart.create(data);
    console.log(carts);
    return carts;
  },

  updatedCart: async (cartId, updateCartData) => {
    const carts = await models.cart.findByPk(cartId);
    if (products) {
      carts.update(updateCartData);
    }
    return carts;
  },

  deleteCart: async (cartId) => {
    const carts = await models.carts.findByPk(cartId);
    if (carts) {
      carts.destroy();
      return "Cart DELETED SUCCESSFULLY";
    }
    return null;
  },
};
