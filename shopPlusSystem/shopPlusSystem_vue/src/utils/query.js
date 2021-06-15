//

import {get, post} from "./http";

export default {
  getCatalog: params => get("/goods/catalog", params),
  getHotList: params => get("/goods/getHotList", params),
  getBanner: params => get("/goods/getBanner", params),
  getHotBanner: params => get("/goods/getHotBanner", params),
  getStoreList: params => get("/goods/getStoreList", params),
  getLiveList: params => get("/goods/getLiveList", params),
  getChatList: params => get("/goods/getChatList", params),
  getProductDetail: params => get("/goods/getProductDetail", params),
  getProductDetailComment: params => get("/goods/getProductDetailComment", params),
  getProductDetailGoodsImg: params => get("/goods/getProductDetailGoodsImg", params),
  getProductUsers: params => get("/goods/getProductUsers", params),
  postLogin: params => post("/user/login", params),
  register: params => post("/user/register", params),
  userInfo: params => get("/user/userinfo", params),
}
