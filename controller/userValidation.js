const joi = require("joi");

module.exports = {
  addUser: joi.object().keys({
    userName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),
  deleteUser: joi.object().keys({
    userId: joi.number(),
    email: joi.string().email(),
  }),
  updatedUser: joi.object().keys({
    userId: joi.number().required(),
    userName: joi.string(),
    email: joi.string().email(),
    password: joi.string(),
  }),
};
