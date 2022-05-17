const pool = require('../dao/pool');
const jwt = require('jsonwebtoken');
const secretKey = '123114655sad46aa';
const verify = (token, callback) => {
    jwt.verify(
        token,
        secretKey,
        callback);
}

//查找公共的用户信息
function getPublicUser(callback) {
    pool.query(
        `
        select 
        userName,
        userId,
        aboutme,
        userPhone
        from users
        where status=1
        `,
        callback
    )
}

//查找用户的公开的歌曲
function getPublicUserSong({publicUserId},callback) {
        pool.query(
            `select 
                url,
                singer,
                someDesc,
                publishTime,
                imginfo
                from music 
                where userId=?`,
            [publicUserId],
            callback
        );
}




//查找用户自己的歌曲
function getMySong({token}, callback) {
    verify(token, (err, {userId}) => {
        if(err){
            console.log(err)
            return 1;
        }
        pool.query(
            `select
                url,
                singer,
                someDesc,
                publishTime,
                imginfo
            from music`,
            [userId],
            callback
        );
    })
}


//提供给其它模块使用
module.exports = {
    getMySong,
    getPublicUserSong,
    getPublicUser,

};
