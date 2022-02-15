// express
const express = require('express');
const router = express.Router();

const {
    getAllCategory,
    getCategoryById,
    getCategoryByName,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/category');

router
    .route('/')
    .get(getAllCategory)
    //.post(createCategory);

router
    .route('/:id')
    //.get(getCategoryById)
    //.put(updateCategory)
    //.delete(deleteCategory)

module.exports = router;