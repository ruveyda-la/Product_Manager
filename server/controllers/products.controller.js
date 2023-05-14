
const Product = require ("../models/products.model");



module.exports = {
    showIndex : (req,res) => {
        res.json({
            message:"Welcome to the Product Manager!"
        })
    },
    createProduct: (req,res) => {
        Product.create(req.body)
                .then(newProduct => res.json(newProduct))
                .catch (err => res.status(400).json({message:"Something went wrong",error:err}));
            },
    getProductById : (req,res) => {
        Product.findOne({_id:req.params._id})
            .then((oneProduct) => {res.json(oneProduct)})
            .catch((err) => {res.json({message:'Something went wrong',error:err})});
            },
    getAllProducts : (req,res) => {
        Product.find()
            .then((allProducts) =>{res.json(allProducts)})
            .catch((err) => {res.json({message: 'Something went wrong',error:err})});
            },
    updateProduct : (req,res) => {
        Product.findOneAndUpdate({_id:req.params._id},req.body,{new:true, runValidators:true})
            .then(updatedProduct => {res.json(updatedProduct)})
            .catch((err) => {res.status(400).json({message:'Something went wrong',error:err})});
            },
    deleteProduct : (req,res) => {
        Product.deleteOne({_id:req.params._id})
            .then(result => {res.json(result)
                })
            .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });
            }
}