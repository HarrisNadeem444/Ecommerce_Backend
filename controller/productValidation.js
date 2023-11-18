const joi = require("joi");

module.exports = {
  addProduct: joi.object().keys({
    productName: joi.string().required(),
    productDescription: joi.string().required(),
    price: joi.number().required(),
    inventory: joi.number(),
  }),
  deleteProduct: joi.object().keys({
    productId: joi.number(),
    productName: joi.string(),
  }),
  updatedProduct: joi.object().keys({
    productId: joi.number().required(),
    productName: joi.string(),
    productDescription: joi.string(),
    price: joi.number(),
    inventory: joi.number(),
  }),
};
