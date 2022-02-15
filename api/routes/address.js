// express
const express = require('express');
const router = express.Router();

const {
    getAddressByUserId,
    addAddress,
    updateAddress,
    deleteAddress
} = require('../controllers/address');

router
    .route('')
    .post(addAddress)

router
    .route('/:userId')
    .get(getAddressByUserId)

router
    .route('/:id')
    .put(updateAddress)
    .delete(deleteAddress)

module.exports = router;