let product = require('../services/productservices');
let cart = require('../services/cartservices');
let userService = require('../services/userservice');
let jwt = require('jsonwebtoken');


const allProducts = (req, res, next) => {
    product.getAllProducts(function (error, data, fields) {
        if (error) {
            next(error);
        } else {
            res.send({ret: 0, data})
        }
    })
}

const addToCart = (req, res, next) => {
    let t = req.body;
    // console.log(t);
    let auth = req.headers['authorization']
    let account = jwt.decode(auth.split(' ')[1])['user_account']
    userService.getUser(account, (error, data1, fields) => {
        if (data1.length === 0) {
            res.send({ret: 1, message: '用户不存在'})
        } else {
            cart.addToMyCart({
                userId: data1[0].user_id,
                amount: t.amount,
                productId: t.productId,
                totalPrice: t.totalPrice,
                price: t.price
            }, (error, data, details) => {
                if (error) {
                    next(error);
                } else {
                    product.getProductInfo(t.productId, (error, data, fields) => {
                        console.log(data.length)
                        console.log(data)
                        if (data.length === 0) {
                            res.send({ret: 1, message: '商品不存在'});
                        }
                        console.log(data[0])
                        let numbers = data[0].stock;

                        if (data.length === 0) {
                            next(new Error('商品不存在'));
                        } else {
                            product.reduceNumbers(t.productId, numbers - t.amount, (error, data, fields) => {
                                if (error) {
                                    next(new Error('系统异常,请联系管理员'))
                                } else {
                                    res.send({ret: 0, msg: '成功'})
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

module.exports = {
    allProducts,
    addToCart
}