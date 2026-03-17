const Order = require('../models/Order');
const Order = require('../models/Product');

// @desc Get all orders
// @route GET /api/v1/orders
// @access private

const getOrders = async (req,res)=>{
    try{
        const orders = await Order.find().populate('customer','name address').populate('productDetaile.product','description unitPrice');

        res.status(200).json({
            success:true,
            count:orders.length,
            data:orders
        });
              
    }catch(error){
        res.status(500).json({
            success:false,
            error:error.message
        })
    }
}
// @desc Get single order
// @route GET /api/v1/orders/:id
// @access private

const getOrder = async (req,res)=>{
    try{
        const order = await Order.findById(req.params.id).populate('customer','name address').populate('productDetaile.product','description unitPrice');

        if(!order){
            return res.status(404).json({
                success:false,
                message:'order not found'
            });
        }

        res.status(200).json({
            success:true,
            data:order
        });
              
    }catch(error){
        res.status(500).json({
            success:false,
            error:error.message
        })
    }
}
// @desc create order
// @route POST /api/v1/order
// @access private

const createOrder = async (req,res)=>{
    try{
        const{customer, productDetails}=req.body;

        let totalAomunt =0;

        for (let item of productDetails){
            const product = await Product.findById(item.product);

            if(!product){
               return res.status(404).json({
                success:false,
                message:'Product with item ${item.product} not found'
            }); 
            }
            if(product.qtyOnHand<item.quantity){
                return res.status(404).json({
                success:false,
                message:'insufficiant quantity for product ${product.description}'
            });
            }
            item.price=product.unitPrice;
            totalAmount+=product.unitPrice*item.quantity;

            //update product quantity
            product.qtyOnHand-=item.quantity;
            await product.save();

        }

        const order = await Order.create({
            customer,
            productDetails,
            totalAmount,
            date:req.body.date || Date.now()
        });

        const populateOrder = await Order.findById(order._id)
        .populate('customer','name address')
        .populate('productDetails.product','description unitPrice')

        res.status(201).json({
            success:true,
            message:populateOrder
        });

        

        
              
    }catch(error){
        res.status(500).json({
            success:false,
            error:error.message
        })
    }
}