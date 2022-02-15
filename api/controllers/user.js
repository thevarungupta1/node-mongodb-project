const User = require('../models/user')

exports.getAllUsers = async(req, res, next) => {
    try {
        const docs = await User.find();
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

exports.getUserById = async(req, res, next) => {
    try {
        const doc = await User.findById(req.params.id)
        if (!doc) {
            return res.status(400).json({
                error: true,
                message: 'no record found'
            });

            res.status(200).json({
                error: false,
                data: doc
            })
        }
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
}