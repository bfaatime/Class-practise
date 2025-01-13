const express = require('express')

const {
    getAllProducts,
    getProductById,
    deleteProduct,
    addNewData,
     } = require("../controllers/productControllers");


 const router = express.Router();
  router.get("/", getAllProducts);
  router.get("/:id", getProductById);
  router.delete("/:id", deleteProduct);
  router.delete("/", addNewData);


module.exports = router;