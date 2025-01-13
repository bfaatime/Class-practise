const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        imageUrl: { type: String, required: true },
        oldPrice: { type: Number, required: true },
 });

const ProductModel = mongoose.model('Products', ProductSchema)

module.exports = ProductModel;