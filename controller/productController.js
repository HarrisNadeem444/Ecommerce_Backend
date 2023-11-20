var express = require("express");
var router = express.Router();
var productService = require("../service/productService");
var productValidation = require("./productValidation");

async function productsController(req, res, next) {
  res.send(await productService.getProduct());
}

async function addProductController(req, res, next) {
  try {
    const { error, value } = productValidation.addProduct.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const data = await productService.addProduct(value);
      console.log(data);
      return res.send(data);
    }
  } catch (error) {
    res.send(error);
  }
}

async function updatedProductController(req, res, next) {
  try {
    const { error, value } = productValidation.updatedProduct.validate(
      req.body
    );
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const productId = req.params.id;
      const updateProductData = req.body;
      const updated = await productService.updatedProduct(
        productId,
        updateProductData,
        value
      );
      res.send(updated);
    }
  } catch (error) {
    res.send(error);
  }
}

async function deleteProductController(req, res, next) {
  try {
    const { error, value } = productValidation.deleteProduct.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const productId = req.params.id;
      const deleted = await productService.deleteProduct(productId, value);
      res.send(deleted);
    }
  } catch (error) {
    res.send(error);
  }
}
async function productByIdController(req, res, next) {
  try {
    const { error, value } = productValidation.productById.validate(
      { productId: req.params.id },
      {
        abortEarly: true,
      }
    );
    if (error) {
      return res.send(error.details.map((err) => err.message));
    } else {
      const productId = Number(value.productId);
      const data = await productService.productById(productId);
      res.send(data);
    }
  } catch (error) {}
}

async function productByCategoryController(req, res, next) {
  try {
    const { error, value } = productValidation.productByCategory.validate(
      { categoryID: req.params.id },
      {
        abortEarly: true,
      }
    );
    if (error) {
      return res.send(error.details.map((err) => err.message));
    } else {
      const productCat = Number(value.categoryID);
      const data = await productService.productByCategory(productCat);
      res.send(data);
    }
  } catch (error) {}
}

module.exports = {
  productsController,
  addProductController,
  updatedProductController,
  deleteProductController,
  productByCategoryController,
  productByIdController,
};
