const express = require('express');
const router = express.Router();
const {  getProducts,
    getProductDetails,
    updateProduct,
    deleteProduct,} = require('../controllers/product-controller');


router.get('/',getProducts);
router.get('/:id',getProductDetails);
router.get('/updateProduct',updateProduct);
router.get('/deleteProduct',deleteProduct);


module.exports = router