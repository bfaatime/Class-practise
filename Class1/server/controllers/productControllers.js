const ProductModel = require("../models/productModel")

const getAllProducts = async (req, res) =>{
    console.log("aa");
    try {
        const Products = await ProductModel.find({});
        res.status(200).json ({ data: Products, message: "succsess!"})
    } catch (error) {
        res.status(500).send ({ message: error.message});
    }
};

const getProductById = async (req, res) =>{
    const { id } = req.params;

    try {
        const Products = await ProductModel.findById(id);
        if (!Products) {
            return res.status(404).json ({ message:"product not found!"});
        }
        res.status(200).json ({ data: Products, message: "succsess!"})
    } catch (error) {
        res.status(500).send ({ message: error.message});
    }
};

const deleteProduct = async (req, res) => {
    const{ id } = req.params;
    try {
    const Products = await ProductModel.findByIdAndDelete(id)
    if (!Products) {
        return res.status(404).json ({message:"product not found!"});
    }
    res.status(200).json ({data: Products, message:"success!"})
   } catch (error) {
    res.status(500).send ({message: error.message})
   }
};

const addNewData = async (req, res) => {
    try {
        const newProduct = ProductModel({ ...req.body });
        await newProduct.save ();
        res.json ({ message: "product added successfully", newProduct: newProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



    module.exports = {
    getAllProducts,
    getProductById,
    deleteProduct,
    addNewData,
    };