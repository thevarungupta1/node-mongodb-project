const Address = require('../models/address');

exports.getAddressByUserId = async(req, res, next) => {
    try {
        const docs = await Address.find({ userId: req.params.userId });
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

exports.addAddress = async(req, res, next) => {
    try {
        const address = await Address.create(req.body);
        res.status(201).json({
            error: false,
            message: 'address added successfully',
            data: address
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
}

exports.updateAddress = async(req, res, next) => {
    try {
        const category = await Address.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!address) {
            return res.status(400).json({
                error: true,
                message: 'not updated'
            })
        }
        res.status(200).json({
            error: false,
            data: address
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        });
    }
}

exports.deleteAddress = async(req, res, next) => {
    try {
        const address = await Address.findByIdAndDelete(req.params.id);

        if (!address) {
            return res.status(400).json({
                error: true,
                message: 'not deleted'
            })
        }
        res.status(200).json({
            error: false,
            message: 'Deleted Successfully',
            data: address
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        });
    }
}