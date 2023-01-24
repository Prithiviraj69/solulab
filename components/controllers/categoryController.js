const catchAsync = require('../helpers/catchAsync.js')
const Category = require('../models/categoryModel.js')
const { create, findOne } = require('../helpers/common.js');


// create New category 
const createCategory = catchAsync(async(req, res, next) => {
    try {
        const {

            categoryId,
            categoryName
        } = req.body;


        const data = {
            categoryId,
            categoryName

        };

        const category = await create(Category, data);

        category
            ?
            res.status(200).json({
                message: "Category create success",
                data: category,
            }) :
            res.status(400).json({
                message: "Category Create failed",
            });
    } catch (error) {
        next(new Error(error));
    }

})


module.exports = { createCategory };