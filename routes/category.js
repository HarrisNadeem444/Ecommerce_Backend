var express = require("express");
var router = express.Router();
const category = require("../controller/categoryController");

/* GET users listing. */
router.get("/", category.categoryController);
router.post("/add", category.addCategoryController);
router.put("/update/:id", category.updatedCategoryController);
router.delete("/delete/:id", category.deleteCategoryController);

module.exports = router;
