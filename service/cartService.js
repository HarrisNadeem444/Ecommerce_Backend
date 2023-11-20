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
  addToCart: async (productID, cartID) => {
    try {
      const newlyAdded = await models.product_cart.create({
        productID,
        cartID,
      });
      return newlyAdded;
    } catch (error) {
      console.log(error);
    }
  },

  deleteFromCart: async (productID, cartID) => {
    try {
      const deleteProduct = await models.product_cart.destroy({
        where: {
          productID,
          cartID,
        },
      });
      return deleteProduct;
    } catch (error) {
      console.log(error);
    }
  },

  cartById: async (cartId) => {
    try {
      const cartById = await models.cart.findByPk(cartId, {
        include: [
          {
            model: models.user,
          },
          {
            model: models.product,
            through: models.product_cart,
          },
        ],
      });
      if (cartById) {
        return cartById;
      } else {
        return "No cart with this ID";
      }
    } catch (error) {
      console.log(error);
    }
  },
};
