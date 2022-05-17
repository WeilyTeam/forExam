import {get, post} from './http'
import {del} from "./http";

export default {
  postLogin: params => post('/user/login', {}),
  postRegister: params => post('/user/register', {}),
  deleteLogout: () => del('/user/logout'),
  postAddAddress: params => post('/user/addAddress', {}),
  getUserinfo: params => get('/user/userinfo', {}),
  deleteAddress: params => del('/user/deleteAddress', {}),
  getAllProducts: params => get('/product/all', {}),
  getMyCart: params => get('/cart/getMyCart', {}),
  addToMyCart: params => post('/product/addToCart', {}),
  deleteMyCart: params => del('/cart/deleteMyCart', {}),
  getMyAddress: params => get('/user/getMyAddress', {})
}
