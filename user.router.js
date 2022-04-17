let userController = require("../controller/user.controller");
let express = require("express");
let router = express.Router();

router.post("/register",userController.register);
router.post("/login",userController.signIn);

module.exports=router;
