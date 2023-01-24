const express = require("express");
const {
    createProduct,
    getProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController.js");

const productRouter = express.Router();

productRouter.post("/createProduct", createProduct);
productRouter.get("/getProduct/:id", getProduct);
productRouter.get("/getAllProduct", getAllProduct);
productRouter.put("/updateProduct/:id", updateProduct);
productRouter.delete("/deleteProduct/:id", deleteProduct);




module.exports = productRouter;