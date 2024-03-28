const express = require('express')
const router = express.Router();

const { getProduct, newProduct, getSingleProduct} = require('../controllers/productController');

router.route('/products').get(getProduct);
router.route('/product/new').post(newProduct);
router.route('/product/:id').get(getSingleProduct);


module.exports = router;