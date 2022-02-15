// express
const express = require('express');
const router = express.Router();

const {
    createOrder,
    getOrders,
    getOrderById,
    getOrderByUserId
} = require('../controllers/order');

router
    .route('')
    .post(createOrder)
    .get(getOrders)

router
    .route('/:userId')
    .get(getOrderByUserId)

router
    .route('/:id')
    .get(getOrderById)

module.exports = router;