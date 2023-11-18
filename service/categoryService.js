const { models } = require("../models");
// const bcrypt = require("bcryptjs");
//Db operations
module.exports = {
  getCategory: async () => {
    const categories = await models.category.findAll();
    return categories;
  },
  addCategory: async (data) => {
    // data.password = bcrypt.hashSync(data.password, 10);
    const categories = await models.category.create(data);
    console.log(categories);
    return categories;
  },

  updatedCategory: async (categoryId, updateCategoryData) => {
    const categories = await models.category.findByPk(categoryId);
    if (products) {
      categories.update(updateCategoryData);
    }
    return categories;
  },

  deleteCategory: async (categoryId) => {
    const categories = await models.category.findByPk(categoryId);
    if (categories) {
      categories.destroy();
      return "Category DELETED SUCCESSFULLY";
    }
    return null;
  },
};
