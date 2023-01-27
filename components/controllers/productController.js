const catchAsync = require('../helpers/catchAsync.js')
const Product = require('../models/productModel.js')
const { create, find, findOne } = require('../helpers/common.js');


/*getProduct: a function that finds a product by its id and returns a response 
with the product data if found, or a failure message if not. */
const createProduct = catchAsync(async(req, res, next) => {
    try {
        const {
            productId,
            productName,
            qtyPerUnit,
            unitPrice,
            unitInStock,
            discontinued,
            categoryId,
        } = req.body;


        const data = {
            productId,
            productName,
            qtyPerUnit,
            unitPrice,
            unitInStock,
            discontinued,
            categoryId,

        };

        const product = await create(Product, data);

        product
            ?
            res.status(200).json({
                message: "Product create success",
                data: product,
            }) :
            res.status(400).json({
                message: "Product Create failed",
            });
    } catch (error) {
        next(new Error(error));
    }

})


/*getProduct which is used to find a single product by its id. The function is defined as an asynchronous function 
which takes in the request, response and next objects as parameters. */
const getProduct = async(req, res, next) => {
    try {

        const { id } = req.params
        const data = {
            productId: id,
        };
        const product = await findOne(Product, data);

        product
            ?
            res.status(200).json({
                status: "success",
                data: product,
            }) :
            res.status(403).json({
                status: "failed",
                data: "product not found",
            });
    } catch (error) {
        next(new Error(error));
    }
};


/*getAllProduct: a function that finds all products and returns a response with 
the product data if found, or a failure message if not. */
const getAllProduct = async(req, res, next) => {
    try {



        const product = await find(Product);

        product
            ?
            res.status(200).json({
                status: "success",
                data: product,
            }) :
            res.status(403).json({
                status: "failed",
                data: "product not found",
            });
    } catch (error) {
        next(new Error(error));
    }
};

/*updateProduct: a function that updates an existing product based on the request body and returns a response 
with a success message and the updated product data. */
const updateProduct = catchAsync(async(req, res, next) => {
    const doc = await Product.updateOne(req.params.productId, req.body, {
        new: true,
        runValidators: true,
    });

    //Return an error if no data found


    res.status(200).json({
        stutus: "success",
        data: {
            data: doc,
        },
    });
});


/*deleteProduct: a function that deletes a product by its id and returns a 
response with a success message and no data. */
const deleteProduct = catchAsync(async(req, res, next) => {

    const doc = await Product.deleteOne(req.params.productId);

    //Return an error if doc is not found

    res.status(204).json({
        status: "success",
        data: null,
    });
});




module.exports = { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct };