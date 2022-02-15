const SubCategory = require('../models/subcategory');

/**
 * Get all sub categories
 */
exports.getAllSubCategory = async(req, res, next) => {
    try {
        const docs = await SubCategory.find().sort({ position: 1 });
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

/**
 * Get sub category by catId
 */
exports.getSubCategoryByCatId = async(req, res, next) => {
    try {
        const docs = await SubCategory.find({
            status: true,
            catId: req.params.catId
        });

        if (!docs) {
            return res.status(200).json({
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
 * create new sub category
 */
exports.createSubCategory = async(req, res, next) => {
    try {
        const subcategory = await SubCategory.create(req.body);
        res.status(201).json({
            error: false,
            message: 'sub category created successfully',
            data: subcategory
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
}

/**
 * update sub category
 */
exports.updateSubCategory = async(req, res, next) => {
    try {
        const subcategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!subcategory) {
            return res.status(400).json({
                error: true,
                message: 'sub category update failed'
            });
        }
        res.status(200).json({
            error: false,
            message: 'sub category updated successfully',
            data: subcategory
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
}


/**
 * delete sub category
 */
exports.deleteSubCategory = async(req, res, next) => {
    try {
        const subcategory = await SubCategory.findByIdAndDelete(req.params.id);

        if (!subcategory) {
            return res.status(400).json({
                error: true,
                message: 'not deleted'
            })
        }
        res.status(200).json({
            error: false,
            message: 'Deleted Successfully',
            data: subcategory
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        });
    }
}