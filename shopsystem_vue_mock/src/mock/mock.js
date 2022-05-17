// mock.js
// 引入mockjs
const Mock = require('mockjs');
const login = () => {
  return Mock.mock({
    ...{
      ret: 0,
      msg: "成功",
      code: 0
    }
  })
}
const register = () => {
  return Mock.mock({
    ...{
      ret: 0,
      msg: "成功",
      code: 0
    }
  })
}
const addAddress = () => {
  return Mock.mock({
    ...{
      ret: 0,
      msg: "成功",
      code: 0
    }
  })
}
const userinfo = () => {
  return Mock.mock({
    "ret": 0,
    "message": "获取用户信息成功",
    "data": [{
      "user_id": 38,
      "username": "190",
      "user_account": "190",
      "password": "2397346b45823e070f6fc72ac94c0a999d234c472479f0e26b30cdf5942db854",
      "phone": "190",
      "create_time": "2021-06-14T05:04:06.000Z",
      "update_time": "2021-06-14T05:04:06.000Z",
      "receive_address": "190"
    }]
  })
}
const deleteAddress = () => {
  return Mock.mock({
    ...{
      ret: 0,
      msg: "成功",
      code: 0
    }
  })
}
const all = () => {
  return Mock.mock(
    {
      "ret": 0,
      "data|1-10": [{
        "product_id|+1": 1,
        "product_name": "智能手机",
        "product_desc": "爆款手机",
        "product_type": "电子",
        "price": "200.00",
        "stock": 47,
        "image": "https://tse2-mm.cn.bing.net/th/id/OIP.gAJgq18dd5Dgn2SjLRwX3QHaHa?w=172&h=180&c=7&o=5&dpr=1.25&pid=1.7",
        "create_time": "2021-06-13T08:51:26.000Z",
        "update_time": "2021-06-13T08:51:26.000Z"
      }, {
        "product_id": 2,
        "product_name": "智能手机",
        "product_desc": "爆款手机",
        "product_type": "电子",
        "price": "300.00",
        "stock": 10,
        "image": "https://tse3-mm.cn.bing.net/th/id/OIP.6CnBqwxGBzSfw2DzKlxXBQHaO0?w=115&h=180&c=7&o=5&dpr=1.25&pid=1.7",
        "create_time": "2021-06-13T08:51:30.000Z",
        "update_time": "2021-06-13T08:51:30.000Z"
      }, {
        "product_id": 3,
        "product_name": "老年机",
        "product_desc": "性能手机",
        "product_type": "电子",
        "price": "50.00",
        "stock": 195,
        "image": "https://tse3-mm.cn.bing.net/th/id/OIP.lw2EnlG03aj4y3PNMsntrgHaHW?w=179&h=180&c=7&o=5&dpr=1.25&pid=1.7",
        "create_time": "2021-06-13T07:09:36.000Z",
        "update_time": "2021-06-13T07:09:36.000Z"
      }]
    }
  )
}
const getMyCart = () => {
  return Mock.mock(
    {
      "ret": 0,
      "message": "成功",
      "data": [{
        "cart_id": 307,
        "product_name": "智能手机",
        "price": "200.00",
        "amount": 1,
        "product_desc": "爆款手机",
        "image": "https://tse2-mm.cn.bing.net/th/id/OIP.gAJgq18dd5Dgn2SjLRwX3QHaHa?w=172&h=180&c=7&o=5&dpr=1.25&pid=1.7"
      }, {
        "cart_id": 308,
        "product_name": "智能手机",
        "price": "200.00",
        "amount": 1,
        "product_desc": "爆款手机",
        "image": "https://tse2-mm.cn.bing.net/th/id/OIP.gAJgq18dd5Dgn2SjLRwX3QHaHa?w=172&h=180&c=7&o=5&dpr=1.25&pid=1.7"
      }]
    })
}
const addToCart = () => {
  return Mock.mock({
    ...{
      ret: 0,
      msg: "成功",
      code: 0
    }
  })
}
const deleteMyCart = () => {
  return Mock.mock({
    ...{
      ret: 0,
      msg: "成功",
      code: 0
    }
  })
}
const getMyAddress = () => {
  return Mock.mock({
    ...{
      ret: 0,
      msg: "成功",
      code: 0
    }
  })
}
const logout = () => {
  return Mock.mock({
    ...{
      ret: 0,
      msg: "成功",
      code: 0
    }
  })
}
Mock.mock('/user/login', login)
Mock.mock('/user/register', register)
Mock.mock('/user/addAddress', addAddress)
Mock.mock('/user/userinfo', userinfo)
Mock.mock('/user/deleteAddress', deleteAddress)
Mock.mock('/product/all', all)
Mock.mock('/cart/getMyCart', getMyCart)
Mock.mock('/product/addToCart', addToCart)
Mock.mock('/cart/deleteMyCart', deleteMyCart)
Mock.mock('/user/getMyAddress', getMyAddress)
Mock.mock('/user/logout', logout)
