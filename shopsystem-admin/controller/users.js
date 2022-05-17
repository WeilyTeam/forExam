// let express = require('express');
let userService = require('../services/userservice');
const jwt = require('jsonwebtoken');
const secretKey = '123456';
const crypto = require('crypto');
let hash = crypto.createHash('sha256');


//用户注册，需要判断账号是否被注册
const register = (req, res, next) => {

    let user = req.body;
    // test.getUser()?.addAddress()
    // console.log(user);
    userService.getUser(user.user_account, (error, data, fields) => {
        console.log(data)
        if (data.length === 1) {
            res.send({ret: 1, message: '该账户已经注册'});
        } else {
            //添加账户
            userService.addUser(user, function (error, data, fields) {
                if (error) {
                    next(error);
                } else {
                    //获取账户ID
                    userService.getUserByNameAndPassword(user, (error, data, fields) => {
                        if (error) {
                            next(error);
                        } else {
                            console.log(data[0].user_id)
                            //添加收货地址
                            userService.addAddress({
                                userId: data[0].user_id,
                                address: user.receiveAddress
                            }, (error, data, fields) => {
                                if (error) {
                                    next(error);
                                } else {
                                    res.send({ret: 0, message: '注册成功'});
                                }
                            })
                        }
                    })

                }
            });
        }
    })


}

//用户登录
const login = (req, res, next) => {
    let user = req.body;
    userService.getUserByNameAndPassword(user, (error, data, fields) => {
        if (error) {
            console.log(error);
            next();
        } else {
            if (data.length !== 1) {
                next(new Error('用户名密码不正确'));
            } else {

                hash.update(user.password);

                const {user_account} = data[0];

                console.log(user_account)
                let token = "Bearer " + jwt.sign({user_account}, secretKey);

                res.send({
                    msg: '登陆成功',
                    token,
                    ret: 0
                })
            }
        }
    })
}

const logout = (req, res) => {
    res.json({ret: 0, message: '退出成功'});
}

//获取用户信息
const userinfo = (req, res, next) => {

    let auth = jwt.decode(req.headers['authorization'].split(' ')[1]);

    userService.getUser(auth['user_account'], (error, data, details) => {
        if (error) {
            next(new Error(error));
        } else {
            res.json({ret: 0, message: '获取用户信息成功', data: data});
        }
    })
}

const addAddress = (req, res, next) => {
    let user = req.body;
    userService.addAddress(user, (error, data, details) => {
        if (error) {
            next(new Error(error));
        } else {
            res.send({ret: 0, message: '新增收货成功'})
        }
    })
}

const getMyAddress = (req, res, next) => {
    let t = req.body;
    let auth = req.headers['authorization'];
    let account = jwt.decode(auth.split(' ')[1])['user_account'];
    userService.getUser(account, (error, data, fields) => {
        if (data.length === 0) {
            res.send({ret: 1, message: '用户不存在'})
        } else {
            userService.getMyAddress(data[0].user_id, (error, data, fields) => {
                if (error) {
                    next(error)
                } else {
                    res.send({ret: 0, data});
                }
            })
        }
    })

}




const deleteAddress = (req, res, next) => {
    let t = req.body;
    let address = t.address;
    let auth = req.headers['authorization']
    let account = jwt.decode(auth.split(' ')[1])['user_account']
    userService.getUser(account, (error, data1, fields) => {
        if (data1.length === 0) {
            res.send({ret: 1, message: '用户不存在'})
        } else {
            userService.getAddress({userId: data1[0]['user_id'], address: address}, (error, data, fields) => {
                if (data.length === 0) {
                    res.send({ret: 1, message: '当前收货地址不存在'})
                } else {
                    if (data1[0]['address'] === address) {
                        res.send({ret: 1, message: '默认收货地址无法删除'});
                    } else {
                        userService.deleteAddress({
                            userId: data[0]['user_id'],
                            address: address
                        }, (error, data, fields) => {
                            if (error) {
                                next(error);
                            } else {
                                res.send({ret: 0, message: '删除收货地址成功'});
                            }
                        })
                    }
                }
            })
        }
    })

}

module.exports = {
    register,
    login,
    logout,
    userinfo,
    addAddress,
    deleteAddress,
    getMyAddress
}
