const Product = require('../models/Product');

// @desc Get all products
// @route GET /api/v1/products
// @access private
const getProducts = async (req, res)=>{
    try{
        const products = await Product.find();
        res.status(200).json({
            success:true,
            count:products.length,
            data:products
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
// @desc Get single product
// @route GET /api/v1/products/:id
// @access private
const getProduct = async (req, res)=>{
    try{
        const product = await Product.findById(req.params.id);

        if(!customer){
            return res.status(404).json({
                success:false,
                message:'product not found'
            });
        }
        res.status(200).json({
            success:true,
            data:customer
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
// @desc create new product
// @route POST /api/v1/products
// @access private
const createProduct = async (req, res)=>{
    try{
        const product = await Product.create(req.body);

            res.status(201).json({
            success:true,
            data:product
        
        });
        

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
// @desc update product
// @route POST /api/v1/products/:id
// @access private
const updateProduct = async (req, res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true});

        if(!product){
            return res.status(404).json({
                success:true,
                message:'product not found'

            });
        }

            res.status(200).json({
            success:true,
            data:product
        
        });
        

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
// @desc delete product
// @route DELETE /api/v1/products/:id
// @access private
const deleteProduct = async (req, res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id);

        if(!product){
            return res.status(404).json({
                success:true,
                message:'product not found'

            });
        }

            res.status(200).json({
            success:true,
            data:{},
            message:'product deleted successfully'
        
        });
        

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports={
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}