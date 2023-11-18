const { models } = require("../models");
// const bcrypt = require("bcryptjs");
//Db operations
module.exports = {
  getProduct: async () => {
    const products = await models.product.findAll();
    return products;
  },
  addProduct: async (data) => {
    // data.password = bcrypt.hashSync(data.password, 10);
    const products = await models.product.create(data);
    console.log(products);
    return products;
  },

  updatedProduct: async (productId, updateProductData) => {
    const products = await models.product.findByPk(productId);
    if (products) {
      products.update(updateProductData);
    }
    return products;
  },

  deleteProduct: async (productId) => {
    const products = await models.product.findByPk(productId);
    if (products) {
      products.destroy();
      return "Product DELETED SUCCESSFULLY";
    }
    return null;
  },
};
