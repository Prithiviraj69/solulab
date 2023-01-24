const mongoose = require('mongoose')

const { Schema } = mongoose

const db = require('../connections/dbConnection')

const schema = new Schema({
    categoryId: { type: mongoose.Schema.ObjectId, ref: 'Category' }, // Category ID
    categoryName: String, // Category Name


}, {
    timestamps: true,
})

const CategoryModel = mongoose.model('Category', schema)


module.exports = CategoryModel;