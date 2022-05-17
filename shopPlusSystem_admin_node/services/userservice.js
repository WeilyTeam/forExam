//使用连接池
let pool = require('../dao/pool');
// 数据采用sha256加密
const crypto = require('crypto');
// 加入JWT ,做用户校验
const jwt = require('jsonwebtoken');
const secretKey = '123114655sad46aa';

const verify = (token, callback) => jwt.verify(token, secretKey, callback);


/**
 * @param {string} user_account
 * @param {string} user_password
 * @param {function} callback
 * @return {void}
 * */
//根据用户名密码获取用户信息，供登录使用
function getUserByAccountAndPassword({user_account, user_password}, callback) {
    let hash = crypto.createHash('sha256');

    hash.update(user_password)
    pool.query(
        "select user_id from tb_user where user_account=? and user_password=?",
        [user_account, hash.digest("hex")],
        callback
    );
}


/**
 * @param {string} username
 * @param {string} user_password
 * @param {string} user_account
 * @param {function} callback
 * @return {void}
 * */
//添加用户信息，供注册使用
function addUser({
                     user_name,
                     user_password,
                     user_account
                 }, callback) {
    // console.log(user)
    // 判断优先判断是否存在该用户
    let hash = crypto.createHash('sha256');

    hash.update(user_password)
    pool.query(
        `insert into tb_user(
                     user_name,
                     user_password,
                     user_account)
                     values(?,?,?)`,
        [user_name,
            hash.digest('hex'),
            user_account],
        callback
    );
}


/**
 * @param {string} username
 * @param {string} token
 * @param {function} callback
 * @return {void}
 * */
//修改用户基本信息，供修改用户的基本信息

function modifyUser({
                        user_name,
                        type,
                        user_avatar,
                        token
                    }, callback) {
    verify(
        token,
        (err, {user_id}) => {
            if (!err) {

                pool.query(
                    `update  tb_user set
                     user_name=?,
                     user_avatar=?
                     type=?
                    where user_id=?`,
                    [user_name,
                        user_avatar,
                        type,
                        user_id
                    ],
                    callback
                );
            }
        }
    )
}


//根据Token 获取用户的信息
/**
 * @param {string} token
 * @param {function} callback
 * @return  {void}
 * */
function getUserInfoByToken({token}, callback) {
    verify(token, (err, {user_id}) => {
        // console.log(data)
        pool.query(
            `select
                        user_name,user_account,user_avatar,type
                    from tb_user where user_id=?`,
            [user_id],
            callback
        )
    })

}

//指明可供其它模块使用的模块
module.exports = {
    getUserByAccountAndPassword,
    addUser,
    getUserInfoByToken,
    modifyUser
};
