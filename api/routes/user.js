// express
const express = require('express');
const router = express.Router();

// model
const User = require('../models/user');
/**
 * Get all users
 */
router.get('/', (req, res) => {
    User.find((error, docs) => {
        if (error) {
            return res.status(400).json({
                error: false,
                message: error.message
            })
        }
        if (!docs) {
            return res.status(404).json({
                error: true,
                message: 'No data find'
            })
        } else {
            return res.status(200).json({
                error: false,
                users: docs
            })
        }
    })
});

/**
 * Get User by Id
 */
router.get('/:id', (req, res) => {
    User.findOne({ _id: req.params.id }, (error, doc) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: error.message
            })
        }
        if (!doc) {
            return res.status(404).json({
                error: true,
                message: 'No record found'
            })
        } else {
            return res.status(200).json({
                error: false,
                user: doc
            })
        }
    })
});


/**
 * Update user
 */
router.put('/:id', (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, (error, doc) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: error.message
            });
        } else {
            return res.status(203).json({
                error: false,
                message: 'updated successfully',
                user: doc
            });
        }
    });
});







module.exports = router;