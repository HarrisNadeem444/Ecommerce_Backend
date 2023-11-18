const joi = require("joi");

module.exports = {
  addCategory: joi.object().keys({
    categoryName: joi.string().required(),
  }),
  deleteCategory: joi.object().keys({
    categoryId: joi.number(),
  }),
  updatedCategory: joi.object().keys({
    categoryId: joi.number().required(),
    categoryName: joi.string(),
  }),
};
