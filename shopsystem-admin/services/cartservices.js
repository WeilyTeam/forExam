let pool = require('../dao/pool')

function getMyCart(userId,callback) {
    pool.query(
        'select cart_id,product_name,c.price,amount,product_desc,image  from cart c left join product p on c.product_id = p.product_id  where user_id = ?',
        [userId],
              callback
    );
}

function addToMyCart(cart, callback) {
    pool.query(
        'insert into cart(user_id,amount,product_id,total_price,price) values(?,?,?,?,?)',
        [cart.userId, cart.amount, cart.productId, cart.totalPrice, cart.price],
        callback
    )
}

function deleteMyCart(cartId, callback) {
    pool.query(
        'delete from cart where cart_id',
        [cartId],
        callback
    )
}

function getMyCartById(cartId, callback) {
    pool.query(
        'select * from cart where cart_id = ?',
        [cartId],
        callback
    )
}

module.exports = {
    getMyCart,
    addToMyCart,
    deleteMyCart,
    getMyCartById
}