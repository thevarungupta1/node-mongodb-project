const Category = require('../models/category');
/**
 * Get all category
 */
exports.getAllCategory = async(req, res, next) => {
    try {
        const docs = await Category.find({ status: true }).sort({ position: 1 });
        res.status(200).json({
            error: false,
            count: docs.length,
            data: docs
        })
    } catch (err) {
        return res.status(400).json({
            error: true,
            message: err.message
        })
    }
}

exports.getCategoryById = async(req, res, next) => {
    try {
        const doc = await Category.find({ status: true, _id: req.params.id });

        if (!doc) {
            return res.status(400).json({
                error: true,
                message: 'no record found'
            })
        }
        res.status(200).json({
            error: false,
            data: doc
        })
    } catch (err) {
        res.status(400).json({
            err: true,
            message: err.message
        })
    }
}

exports.createCategory = async(req, res, next) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json({
            error: false,
            message: 'category created successfully',
            data: category
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
}

exports.updateCategory = async(req, res, next) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!category) {
            return res.status(400).json({
                error: true,
                message: 'not updated'
            })
        }
        res.status(200).json({
            error: false,
            data: category
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        });
    }
}

exports.deleteCategory = async(req, res, next) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(400).json({
                error: true,
                message: 'not deleted'
            })
        }
        res.status(200).json({
            error: false,
            message: 'Deleted Successfully',
            data: category
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        });
    }
}