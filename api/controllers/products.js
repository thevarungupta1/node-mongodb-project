const Product = require('../models/product');

/**
 * Get All Products
 */
exports.getAllProducts = async(req, res, next) => {
    try {
        const docs = await Product.find({ status: true }).sort({ position: 1 });
        res.status(200).json({
            error: false,
            count: docs.length,
            data: docs
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
}

/**
 * Get Product by Id
 */
exports.getProductById = async(req, res, next) => {
    try {
        const doc = await Product.findById(req.params.id);
        if (!doc) {
            return res.status(400).json({
                error: true,
                message: 'no record found'
            });
        }
        res.status(200).json({
            error: false,
            data: doc
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
}

/**
 * Get Product by SubId
 */
exports.getProductsBySubId = async(req, res, next) => {
    try {
        const docs = await Product.find({ status: true, subId: req.params.subId }).sort({ position: 1 });
        if (!docs) {
            return res.status(400).json({
                error: true,
                message: 'no record found'
            });
        }
        res.status(200).json({
            error: false,
            count: docs.length,
            data: docs
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
}

/**
 * Create new Product
 */
exports.createProduct = async(req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            error: false,
            message: 'product created successfully',
            data: product
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
}

/**
 * Update Product
 */
exports.updateProduct = async(req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req, params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!product) {
            return res.status(400).json({
                error: true,
                message: 'not updated'
            });
        }
        res.status(200).json({
            error: false,
            message: 'updated successfully',
            data: product
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
}

/**
 * Delete Product
 */
exports.deleteProduct = async(req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            error: false,
            message: 'deleted successfully'
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
}