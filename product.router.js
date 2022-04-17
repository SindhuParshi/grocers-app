let productController = require("../controller/product.controller");
let express = require("express");
let router = express.Router(); // get the reference of router
let auth = require("../middleware/auth");

router.post("/storeProduct",productController.storeProduct);
router.get("/retrieveProduct",productController.retrieveProduct);
router.put("/updateProduct",productController.updateProduct);
router.delete("/deleteProduct/:_id",productController.deleteProduct);

router.get("/retrieveProduct",auth.verifyuserToken,productController.retrieveProduct);

module.exports=router;   