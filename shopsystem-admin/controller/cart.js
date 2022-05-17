const cart = require('../services/cartservices')
let jwt = require('jsonwebtoken');
let userservice = require('../services/userservice');




const getMyCart = (req, res, next) => {
    // let user = req.body;
    let header = req.headers["authorization"];

    let userAccount = jwt.decode(header.split(' ')[1]);
    let t = userAccount['user_account'];
    console.log(t)
    userservice.getUser(t, (error, data, details) => {
        if (data.length === 0) {
            next(new Error('用户不存在'));
        } else {
            cart.getMyCart(data[0].user_id, (error, data, details) => {
                if (error) {
                    next(error)
                } else {
                    res.send({ret: 0, message: '成功', data: data})
                }
            })
        }
    })

}

const addToMyCart = (req, res, next) => {
    let cart = req.body;
    cart.addToMyCart(cart, (error, data, fields) => {
        if (error) {
            next(error);
        } else {
            res.send({ret: 0, message: '加入购物车成功'});
        }
    })
}

const deleteMyCart = (req, res, next) => {
    let header = req.headers["authorization"];
    // console.log(req.query)
    let cart1 = req.query;

    console.log(cart1.cartId + '666');
  
    let userAccount = jwt.decode(header.split(' ')[1]);
    let t = userAccount['user_account'];
    cart.getMyCartById(cart1.cartId, (error, data,  details) => {
        // console.log(data)

        if (data.length === 0) {
            next(new Error('购物车中物品不存在'));
        } else {
            userservice.getUser(t, (error, data, fields) => {
                if (data.length === 0) {
                    res.send({ret: 1, message: '用户不存在或者未登录'});
                } else {
                    cart.deleteMyCart(t.cartId, (error, data, details) => {
                        if (error) {
                            next(new Error('系统异常,请联系管理员'));
                        } else {
                            res.send({ret: 0, message: '操作成功'});
                        }
                    })
                }
            })

        }
    })
}

module.exports = {
    getMyCart,
    deleteMyCart,
    addToMyCart
}

