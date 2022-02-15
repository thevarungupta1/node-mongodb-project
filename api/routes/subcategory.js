// express
const express = require('express');
const router = express.Router();

const {
    getAllSubCategory,
    getSubCategoryByCatId,
    createSubCategory,
    updateSubCategory,
    deleteSubCategory
} = require('../controllers/subcategory');

router
    .route('/')
    //.get(getAllSubCategory)
    //.post(createSubCategory)

router
    .route('/:catId')
    .get(getSubCategoryByCatId)
    //.put(updateSubCategory)

module.exports = router;