//使用连接池
let pool = require('../dao/pool');
// 数据采用sha256加密
const crypto = require('crypto');

// 加入JWT ,做用户校验
const jwt = require('jsonwebtoken');
const secretKey = '123114655sad46aa';

const verify = (token, callback) => {
    jwt.verify(
        token,
        secretKey,
        callback);
}


// 根据用户名 获取user_id
const getUserIdByUserPhone = (userPhone, callback) => {
    pool.query(
        "select userId from users where userPhone=? ",
        [userPhone],
        callback
    )
}

/**
 * @param {string} user_account
 * @param {string} user_password
 * @return {void}
 * */
//根据用户名密码获取用户信息，供登录使用
function getUserByAccountAndPassword({ userPhone, password }, callback) {
    let hash = crypto.createHash('sha256');
    hash.update(password)
    pool.query(
        "select userId from users where userPhone=? and password=?",
        [userPhone, hash.digest("hex")],
        callback
    );
}


//添加用户信息，供注册使用
function addUser({
    userName,
    password,
    userPhone
}, callback) {
    console.log(password)
    // 判断优先判断是否存在该用户
    let hash = crypto.createHash('sha256');
    hash.update(password)

    pool.getConnection((err, connection) => {
        connection.query(`insert into users(
            userName,
            password,
            userPhone)
            values(?,?,?)`,
            [userName,
                hash.digest("hex"),
                userPhone],
            (err, data) => {
                callback(err, data)
                console.log(20)
                connection.release();
            })
    })
}


//根据Token 获取用户的信息
/**
 * @param {string} token
 * @param {function} callback
 * @return  {void}
 * */
function getUserInfoByToken({ token }, callback) {
    verify(token, (err, { userId }) => {
        // console.log(data)
        pool.query(
            `select
                    userName,userPhone
                    from users where userId=?`,
            [userId],
            callback
        )
    })

}

function uploadMusic({ userId, url, singer = '暂无信息', desc = '暂无描述', publishTime = '0-0-0' }, callback) {
    pool.query(
        `insert into music(userId,url,singer,someDesc,publishTime)values(?,?,?,?,?)`,
        [userId, url, singer, desc, publishTime],
        callback
    )
}

function changePublic({token}, callback){
    verify(token,(err,{userId})=>{
        if(err){
            console.log(err)
            return
        }
        pool.query("select status from users where userId=?",[userId],(err,data)=>{
            if(err){
                console.log(err)
                return 
            }
            if(data[0].status===1){
                pool.query("update users set status=0 where userId=?",[userId],(err,data)=>{
                    console.log(data)
                    callback;
                })
            }else{
                pool.query("update users set status=1 where userId=?",[userId],(err,data)=>{
                    console.log(data)
                    callback;
                })
            }
            
        })
    }
        )
}

function getMyStatus(token, callback){
    verify(token,(err,{userId})=>{
        if(err){
            console.log(err)
            return
        }
        pool.query(
            `
            select status from users where userId=?
            `,[userId],callback)
    })
}
//指明可供其它模块使用的模块
module.exports = {
    getUserIdByUserPhone,
    addUser,
    getUserInfoByToken,
    uploadMusic,
    getUserByAccountAndPassword,
    changePublic,
    getMyStatus
};
