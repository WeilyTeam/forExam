let pool = require('../dao/pool')

function getAllProducts(callback) {
    pool.query(
        "select * from product",
        callback
    );
}

function reduceNumbers(productId,numbers, callback) {
    pool.query(
        'update product set stock = ? where product_id = ?',
        [numbers, productId],
        callback
    )
}

function getProductInfo(productId, callback) {
    pool.query(
        'select * from product where product_id = ?',
        [productId],
        callback
    )
}

module.exports = {
    getAllProducts,
    reduceNumbers,
    getProductInfo
}