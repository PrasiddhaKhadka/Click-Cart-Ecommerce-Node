const Product = require('../models/Product')


const getProducts = async(req,res)=>{
    res.status(200).json({status:"Success",msg:'Hello World from Get Product'})
}


const getProductDetails= async(req,res)=>{
    res.status(200).json({status:"Success",msg:'Hello World from Get Single Product'})
}

const updateProduct = async(req,res)=>{
    res.status(200).json({status:"Success",msg:'Hello World from Update Product'})

}

const deleteProduct = async(req,res)=>{
    res.status(200).json({status:"Success",msg:'Hello World from Delete Product'})
}

module.exports={
    getProducts,
    getProductDetails,
    updateProduct,
    deleteProduct,
}