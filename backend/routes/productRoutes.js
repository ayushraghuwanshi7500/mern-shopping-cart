const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById
} = require('../controller/productController');
// @desc : GET All Products
// @route: GET /api/products
// @access: PUBLIC

router.get('/', getAllProducts);

// @desc : GET a Product by ID
// @route: GET /api/products/:id
// @access: PUBLIC

router.get('/:id', getProductById);

module.exports = router;
