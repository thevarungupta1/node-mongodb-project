// express
const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    getProductById,
    getProductsBySubId,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

router
    .route('/')
    //.post(createProduct)
    //.get(getAllProducts);

router
    .route('/:id')
    //.get(getProductById)
    //.put(updateProduct)
    //.delete(deleteProduct)

router
    .route('/:subId')
    .get(getProductsBySubId)

module.exports = router;