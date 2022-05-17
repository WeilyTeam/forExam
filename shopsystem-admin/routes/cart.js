let express = require('express');
let router = express.Router();

const {getMyCart, deleteMyCart} = require('../controller/cart')

router.get('/cart', (req, res, next) => {
});

router.get('/getMyCart', getMyCart);

router.delete('/deleteMyCart', deleteMyCart);

module.exports = router;