const jwt = require('jsonwebtoken');
const {
    addUser,
    getUserByAccountAndPassword,
    getUserInfoByToken,
    modifyUser
} = require("../services/userservice");
const secretKey = '123114655sad46aa';


const register = (req, res, next) => {
    console.log(req.body)
    addUser(req.body,
        (error, data, fields) => {
            console.log(error)
            if (error) {
                next(error);
            } else {
                return res.send(
                    {message: '注册成功'}
                );
            }
        });

}

const modify = (req, res, next) => {

    modifyUser(req.body,
        (error, data, fields) => {
            if (error) {
                next(error);
            } else {
                return res.send(
                    {message: '注册成功'}
                );
            }
        });
}
const login = (req, res, next) => {
    console.log(req.body)
    getUserByAccountAndPassword(req.body,
        (error, data, fields) => {
            if (error) {
                return next(error);
            }
            if (data.length === 0) {
                return res.send({
                    msg: "用户名或密码错误"
                });
            }

            const {user_id} = data[0]
            // 保存当前会话信息

            //返回token 提供校验
            const token = jwt.sign({user_id}, secretKey);
            return res.send({
                msg: "登陆成功",
                token,
            });
        })
}


const userinfo =  (req, res, next) => {
     getUserInfoByToken( req.query,
        (err, data) => {
            console.log(...data)

            return res.send({
                ...data[0],
                msg:"获取成功"
            })
        }
    )

}
const loginout = (req, res) => {
    // req.session.destroy();
    return res.send(
        {message: '注销成功'}
    );
}

module.exports = {
    register,
    login,
    loginout,
    userinfo,
    modify
}
