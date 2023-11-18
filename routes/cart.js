var express = require("express");
var router = express.Router();
const cart = require("../controller/cartController");

/* GET users listing. */
router.get("/", cart.cartController);
router.post("/add", cart.addCartController);
router.put("/update/:id", cart.updatedCartController);
router.delete("/delete/:id", cart.deleteCartController);

module.exports = router;
