const catchAsync = require('../helpers/catchAsync.js')
const Product = require('../models/productModel.js')
const { create, find, findOne } = require('../helpers/common.js');


// create New products 
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


//find product by id
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


//Find all Product
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

//Update product by id
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


//Delete Product by id
const deleteProduct = catchAsync(async(req, res, next) => {

    const doc = await Product.deleteOne(req.params.productId);

    //Return an error if doc is not found

    res.status(204).json({
        status: "success",
        data: null,
    });
});




module.exports = { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct };