import {get, post} from './http'
import {del} from "./http";

export default {
  postLogin: params => post('/user/login', params),
  postRegister: params => post('/user/register', params),
  deleteLogout: () => del('/user/logout'),
  postAddAddress: params => post('/user/addAddress', params),
  getUserinfo: params => get('/user/userinfo', params),
  deleteAddress: params => del('/user/deleteAddress', params),
  getAllProducts: params => get('/product/all', params),
  getMyCart: params => get('/cart/getMyCart', params),
  addToMyCart: params => post('/product/addToCart', params),
  deleteMyCart: params => del('/cart/deleteMyCart', params),
  getMyAddress: params => get('/user/getMyAddress', params)
}
