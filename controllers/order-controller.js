const Order = require('../models/Order')
const Product = require('../models/Product')
const CustomAPIError = require('../errors/')
const checkPermission = require('../utils/check-permission')
const { StatusCodes } = require('http-status-codes')



const getOrders = async(req,res)=>{
    const orders = await Order.find({})
    res.status(StatusCodes.OK).json({
        msg:'Success',
        orders:orders,
        count:orders.length,
    })
}

const getOrderDetails = async(req,res)=>{
    const { id: orderId } = req.params;
    const orders = await Order.findById({
        _id:orderId
    })
    if(!orders){
        throw new CustomAPIError.NotFoundError(`No order with id : ${orderId}`)
    }
    checkPermission(req.user, order.user)
    res.status(StatusCodes.OK).json({ orders, count: orders.length });
}

const getCurrentUserOrders = async(req,res)=>{
    const orders = await Order.find({user: req.user.userId});
    res.status(StatusCodes.OK).json({
        msg:'Success',
        orders:orders,
        count:orders.length,
    })
}

const postOrder = async(req,res)=>{
    const { tax, shippingFee, subtotal, total, orderItems, status,
        user, clientSecret, paymentIntentId
    } = req.body;



    // const product = await Product.findById({
    //     _id:
    // })


    res.status(StatusCodes.OK).json({
        msg:'Success From Post Order'
    })
}


const updateOrder = async(req,res)=>{
    res.status(StatusCodes.OK).json({
        msg:'Update Order Status'
    })
}

const deleteOrder = async(req,res)=>{
    res.status(StatusCodes.OK).json({
        msg:'Delete Order'
    })
}

module.exports ={
    getOrders,
    getOrderDetails,
    getCurrentUserOrders,
    postOrder,
    updateOrder,
    deleteOrder
}