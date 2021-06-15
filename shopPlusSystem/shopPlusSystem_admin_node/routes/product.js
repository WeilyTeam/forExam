let express = require('express');
const {
    catalog,
    getHot,
    getBanner,
    getHotBanner,
    getStoreList,
    getLiveList,
    getChatList,
    getProductDetail,
    getProductDetailComment,
    getProductDetailGoodsImg,
    getProductUsers
} = require("../controller/product");

//调用数据访问层功能

let router = express.Router();
/* GET users listing. */

router.get('/catalog', catalog)
router.get('/getHotList', getHot)
router.get('/getBanner', getBanner)
router.get('/getHotBanner', getHotBanner)
router.get('/getStoreList', getStoreList)
router.get('/getLiveList', getLiveList)
router.get('/getChatList', getChatList)
router.get('/getProductDetail', getProductDetail)
router.get('/getProductDetailComment', getProductDetailComment)
router.get('/getProductDetailGoodsImg', getProductDetailGoodsImg)
router.get('/getProductUsers', getProductUsers)


module.exports = router;
