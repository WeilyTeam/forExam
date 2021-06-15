const userService = require('../services/userservice');
const jwt = require('jsonwebtoken');
const secretKey = '123114655sad46aa';
const _ = require('lodash');

const register =async  (req, res, next) => {
    const {
        userName,
        password,
        userPhone,
    } = req.body;
    await userService.addUser(
        {
            userName,
            password,
            userPhone
        },
        (error, data, fields) => {
            console.log(error)
            if (error) {
                console.log(error)
            } else {
                console.log(data)
                let userId=data.insertId;
                const token = jwt.sign({userId}, secretKey);
                res.send({code: 0, token,msg: '注册成功'});

            }
        });
}

const login = (req, res, next) => {
    const {userPhone, password} = req.body;
    userService.getUserByAccountAndPassword(
        {userPhone, password},
        (error, data, fields) => {
            if (error) {
                console.log(error)
                return next(error);
            }
            if (data.length === 0) {
                return res.send({
                    msg: "用户名或密码错误",
                    code:5
                });
            }

            const {userId} = data[0]
            //返回token 提供校验
            const token = jwt.sign({userId}, secretKey);
            return res.send({
                msg: "登陆成功",
                token,
                code:0
            });
        })
}


const userinfo = (req, res, next) => {
//    需要 token 验证是否是会话人员
    const token = req.body.token;
    userService.getUserInfoByToken({token},
        (err, data) => {
            return res.send({
                ...data[0]
            })
        }
    )

}

const fileupload = (req,res,next)=>{
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let userPhone=req.body.userPhone||"17713552414";
            if(Array.isArray(req.files.file)){
                let data = []; 
        
                //loop all files
                _.forEach(_.keysIn(req.files.file), (key) => {
                    
                    let file = req.files.file[key];
                    
                    file.mv('./public/' +userPhone+'/'+ file.name);
                    
                    userService.getUserIdByUserPhone(userPhone,(err,data)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        let userId=data[0].userId
                        
                        let url='http://127.0.0.1:3000/'+userPhone+'/'+ file.name;
                        userService.uploadMusic({
                        userId,
                        url,
                        singer:"张三",
                        desc:"desc"
                    },(err,data)=>{
                        if(err){
                            console.log(err);
                            return;
                        }
                        console.log(data)
                    })
                    })
                    data.push({
                        name: file.name,
                        mimetype: file.mimetype,
                        size: file.size
                    });
                });
                //return response
                res.send({
                    status: true,
                    message: 'Files are uploaded',
                    data: data
                });
            }else{

                let file0 = req.files.file;

                //Use the mv() method to place the file in upload directory (i.e. "uploads")
                file0.mv('./public/' + userPhone+'/'+file0.name);
                
                userService.getUserIdByUserPhone(userPhone,(err,data)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    let userId=data[0].userId;
                    let url='http://127.0.0.1:3000/'+userPhone+'/'+ file0.name;
                    userService.uploadMusic({
                        userId,
                        url,
                        singer:"张三",
                        desc:"desc"
                    },(err,data)=>{
                        if(err){
                            console.log(err);
                            return;
                        }
                        console.log(data)
                    })
                })
                
                //send response
                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: file0.name,
                        mimetype: file0.mimetype,
                        size: file0.size
                    }
                });
            }
           
        }
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
}

const changeMyPublic=(req,res,next)=>{
    let {token}=req.body;
    userService.changePublic({token},(err,data)=>{
        if(err){
            return res.send({
                code:5,
                err
            })
        }
        console.log(data)
        res.send({
            code:0,
            mgs:"修改成功"
        })
    })

}

const getMyPublic=(req,res,next)=>{
    let {token}=req.body;
    userService.getMyStatus(token,(err,data)=>{
        if(err){
            return res.send({
                code:5,
                err
            })
        }
        console.log(data)
        res.send({
            code:0,
            data
        })
    })

}

const getUserInfoByToken=(req,res,next)=>{
    let {token}=req.body;
    console.log(token)
    userService.getUserInfoByToken({token},(err,data)=>{
        if(err){
            return res.send({
                code:5,
                err
            })
        }
        console.log(data)
        res.send({
            code:0,
            data
        })
    })
}

module.exports = {
    register,
    login,
    userinfo,
    fileupload,
    changeMyPublic,
    getMyPublic,
    getUserInfoByToken
}
