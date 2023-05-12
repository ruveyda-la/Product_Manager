const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
    title:{
        type: String,
        required: [true,"Title is required"],
        minlength: [2,"Title must be at least 2 characters long"],
        maxlength: [255,"Title cannot be more than 255 characters long"]
        },
    price:{
        type: Number,
        required: [true,"Price is required"]
        },
    description:{
        type: String,
        required: [true,"Description is required"],
        minlength: [10,"Description must be at least 10 characters long"],
        maxlength: [255,"Description cannot be more than 255 characters long"]
        }
    },
    {timestamps:true}
)

const Product = mongoose.model("Product",ProductSchema)

module.exports = Product;