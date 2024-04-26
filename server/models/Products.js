const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    color: String,
    price: Number,
    comments: String
})

const ProductModel = mongoose.model("products", ProductSchema)
module.exports = ProductModel