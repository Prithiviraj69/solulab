const express = require("express");
const { createCategory } = require("../controllers/categoryController");

const categoryRouter = express.Router();

categoryRouter.post("/createCategory", createCategory);


module.exports = categoryRouter;