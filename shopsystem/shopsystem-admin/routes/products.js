let express = require('express');
let router = express.Router();

const {allProducts, addToCart} = require('../controller/product')

router.get('/product', function(req, res, next) {
    console.log('Hello World');
    res.send('respond with a resource');
});

router.get('/all', allProducts);

router.post('/addToCart', addToCart);

module.exports = router;