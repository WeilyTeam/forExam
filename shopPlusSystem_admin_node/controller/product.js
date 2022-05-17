const mock = require("../middles/mock")


const catalog = (req, res, next) => {

    res.send(mock.catalog())

};
const getHot = (req, res, next) => {
    res.send(mock.getHot())

};
const getBanner = (req, res, next) => {
    res.send(mock.getBanner())

};
const getHotBanner = (req, res, next) => {
    res.send(mock.getHotBanner())
};
const getStoreList = (req, res, next) => {
    res.send(mock.getStoreList())
};
const getLiveList = (req, res, next) => {
    res.send(mock.getLiveList())
};
const getChatList = (req, res, next) => {
    res.send(mock.getChatList())
};
const getProductDetailComment = (req, res, next) => {
    res.send(mock.getProductDetailComment())
};
const getProductDetail = (req, res, next) => {
    res.send(mock.getProductDetail())
};
const getProductDetailGoodsImg = (req, res, next) => {
    res.send(mock.getProductDetailGoodsImg())
};
const getProductUsers = (req, res, next) => {
    res.send(mock.getProductUsers())
};
module.exports = {
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
}
