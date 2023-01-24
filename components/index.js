const express = require("express");

const productRouter = require("./routes/productRoute")
const categoryRouter = require("./routes/categoryRoute")

const router = express.Router();

router.use("/product", productRouter);
router.use("/category", categoryRouter);


module.exports = router;