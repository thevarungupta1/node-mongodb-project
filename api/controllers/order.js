const Order = require('../models/order');

exports.createOrder = async(req, res, next) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json({
            error: false,
            message: 'Order added successfully',
            data: order
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
}

exports.getOrders = async(req, res, next) => {
    try {
        const docs = await Order.find();
        console.log(docs);
        if (docs == null) {
            return res.status(400).json({
                error: true,
                message: 'no record found'
            })
        }
        res.status(200).json({
            error: false,
            data: docs
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: err.message
        })
    }
}

exports.getOrderByUserId = async(req, res, next) => {
    try {
        const docs = await Order.find({ userId: req.params.userId });
        console.log(docs);
        if (docs == null) {
            return res.status(400).json({
                error: true,
                message: 'no record found'
            })
        }
        res.status(200).json({
            error: false,
            data: docs
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: err.message
        })
    }
}

exports.getOrderById = async(req, res, next) => {
    try {
        const docs = await Order.findById(req.params.Id);
        console.log(docs);
        if (docs == null) {
            return res.status(400).json({
                error: true,
                message: 'no record found'
            })
        }
        res.status(200).json({
            error: false,
            data: docs
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: err.message
        })
    }
}