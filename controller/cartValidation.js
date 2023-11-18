const joi = require("joi");

module.exports = {
  addCart: joi.object().keys({
    cartName: joi.string().required(),
  }),
  deleteCart: joi.object().keys({
    cartId: joi.number(),
  }),
  updatedCart: joi.object().keys({
    cartId: joi.number().required(),
    cartName: joi.string(),
  }),
};
