const query = require('../dao/pool').query;
const jwt = require('jsonwebtoken');
const secretKey = '123114655sad46aa';
const verify = (token, callback) => {
    jwt.verify(
        token,
        secretKey,
        callback);
}

//提供给其它模块使用
const queryCatalog = (callback) => {
    // console.log(callback)
    const sql = `
    select type_name, 
        product_name, 
        product_price, 
        product_desc from 
        product_type p  
        left join type t 
        on t.type_id = p.type_id 
        left join product_info pi 
    on pi.product_id = p.product_id
    `
    return query(sql, [], callback)

};

const queryGetHot = (isHot,callback) => {
    const sql = `select type, 
                    product_id, 
                    product_name, 
                    product_desc, 
                    product_price, 
                    product_number, 
                    product_img 
                    from product_info 
                    where isHot = 1`;
    return query(sql, [isHot], callback);
};

const queryGetBanner = (banner, callback) => {
    // product_id
    const sql = `select product_id, product_img from product `;
    return query(sql, [ ], callback);
};
const queryGetHotBanner = (banner, isHot,callback) => {
    //
    const sql = `select product_id, product_img from product where isHot = 1`;
    return query(sql, [], callback);
};
const queryGetStoreList = ( callback) => {

    const sql = `select user_id, user_name, user_avatar from user `;
    return query(sql, [], callback);
};
const queryGetLiveList = (callback) => {

    const sql = `select live_id, live_name, live_poster from live_info`;
    return query(sql, [], callback);
};
const queryGetChatList = (liveId,callback) => {

    const sql = `select user_id, user_name, user_avatar from user`;
    return query(sql, [liveId], callback);
};
const queryGetProductDetail = (productId,callback) => {

    const sql = `select product_id,
              product_name,
               product_desc,
               product_price, 
               product_number,
               product_img  
               from product_info
        where product_id = ?`;
    return query(sql, [productId], callback);
};
const queryGetProductDetailComment = (userId, callback) => {

    const sql = `select t.user_id, 
                    user_name, 
                    comment_id, 
                    comment_content, 
                    user_avatar 
                 from comment c
                    left join tb_user t 
                    on t.user_id = c.user_id 
                 where c.user_id = ?`;
    return query(sql, [userId], callback);
};
const queryGetProductDetailGoodsImg = (productId,callback) => {

    const sql = `select product_img 
                    from product_info 
                   where product_id = ?`;
    return query(sql, [productId], callback);
};
const queryGetProductUsers = (productId,callback) => {

    const sql = `select up.user_id,
                    user_name,
                    user_avatar 
                    from user_product up 
                    left join tb_user u 
                    on  u.user_id = up.user_id 
                    where up.product_id = ?`;
    return query(sql, [productId], callback);
};
module.exports = {
    queryCatalog,
    queryGetHot,
    queryGetBanner,
    queryGetHotBanner,
    queryGetStoreList,
    queryGetLiveList,
    queryGetChatList,
    queryGetProductDetail,
    queryGetProductDetailComment,
    queryGetProductDetailGoodsImg,
    queryGetProductUsers
};
