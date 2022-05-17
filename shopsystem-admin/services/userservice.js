//使用连接池
let pool=require('../dao/pool');
//密码采用sha256加密
const crypto = require('crypto');


//根据用户名密码获取用户信息，供登录使用
function getUserByNameAndPassword(user,callback){
    const hash = crypto.createHash('sha256');
    hash.update(user.password)
    pool.query("select * from user where user_account = ? and password = ?",
        [user.user_account,hash.digest("hex")],
                callback
    );
}

//添加用户信息，供注册使用
function addUser(user,callback){
    const hash = crypto.createHash('sha256');

    hash.update(user.password);
    pool.query("insert into user(username,user_account,password,phone,receive_address) values(?,?,?,?,?)",
        [user.username,user.user_account,hash.digest('hex'), user.phone,user.receiveAddress],
        callback
    );
}

//获取用户信息,用于从token中获取用户信息
function getUser(userAccount, callback) {
    pool.query("select * from user where user_account = ?",
        [userAccount],
                callback
    );
}

//注销用户
function deleteUser(userAccount, callback) {
    pool.query("delete from user where user_account = ? ", [userAccount],function (err, data, fields)  {
        callback(err, data, fields);
    })
}

//添加收货地址
function addAddress(user, callback) {
    pool.query(
        'insert into user_address(user_id, address) values (?,?)',
        [user.userId, user.address],
        callback
        )
}
//删除收货地址
function  deleteAddress(user, callback) {
    pool.query(
        'delete from user_address where user_id = ? and address = ? ',
        [user.userId, user.address],
        callback
    )
}

function getAddress(user, callback) {
    pool.query(
        'select * from user_address where user_id = ? and address = ?',
        [user.userId, user.address],
        callback
    )
}

function getMyAddress(userId, callback) {
    pool.query(
        `select * from user_address where user_id = ?`,
        [userId],
        callback
    )
}


//指明可供其它模块使用的模块
module.exports={
    getUserByNameAndPassword,
    addUser,
    deleteUser,
    getUser,
    addAddress,
    deleteAddress,
    getAddress,
    getMyAddress
};