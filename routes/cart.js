var express = require("express");
var router = express.Router();
const cart = require("../controller/cartController");

/* GET users listing. */
router.get("/", cart.cartController);
router.post("/add", cart.addCartController);
router.put("/update/:id", cart.updatedCartController);
router.delete("/delete/:id", cart.deleteCartController);
router.post("/addToCart", cart.addToCartController);
router.delete("/deleteFromCart", cart.deleteFromCartController);
router.get("/cartById/:id", cart.cartByIdController);

module.exports = router;
