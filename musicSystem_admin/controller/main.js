const {
    getMySong,
    getPublicUser,
    getPublicUserSong
} = require("../services/mainservices");

// 获取自己上传的歌曲
const current = (req, res, next) => {
    const {token} = req.body;
    getMySong({token}, (err, data) => {
        if (err) {
            console.log(err)
            return res.send({
                msg: "获取失败",
            })
        }
        console.log(data)
        
        let imgUrl = data.map(val=>val.imgUrl)
        

        return res.send({
            code:0,
            data,
            msg: "获取成功",
        })
    })
}

const PublicUserSong=(req, res, next)=>{
    let publicUserId=req.body.id;
    getPublicUserSong({publicUserId},(err,data)=>{
        if(err){
            console.log(err)
            return res.send({
                code:5
            })
        }
        res.send({
            code:0,
            data
        })
    })
}

const getPublicU = (req, res, next) => {
    
    getPublicUser((err, data) => {
        if(err){
            console.log(err);
            return res.send({
                err
            })
        }
        console.log(data)
        res.send({
            code:0,
            data
        })
    }
        
        

    )
}


module.exports = {
    current,
    getPublicU,
    PublicUserSong
}
