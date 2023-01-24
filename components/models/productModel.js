const mongoose = require('mongoose')
const { Schema } = mongoose
const db = require('../connections/dbConnection.js')

const schema = new Schema({
    productId: { type: mongoose.Schema.ObjectId }, // Product ID
    productName: String, // Product Name
    qtyPerUnit: Number, // Quantity of the Product
    unitPrice: Number, // Unit Price of the Product
    unitInStock: Number, // Unit in Stock
    discontinued: Boolean, // Boolean (yes/no)
    categoryId: { type: mongoose.Schema.ObjectId, ref: 'Category' }, // Category ID


}, {
    timestamps: true,
})

const ProductModel = mongoose.model('Product', schema)

module.exports = ProductModel;