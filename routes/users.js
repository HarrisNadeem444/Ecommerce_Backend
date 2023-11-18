var express = require("express");
var router = express.Router();
const users = require("../controller/userController");

/* GET users listing. */
router.get("/", users.usersController);
router.post("/add", users.addUserController);
router.put("/update/:id", users.updatedUserController);
router.delete("/delete/:id", users.deleteUserController);

module.exports = router;
