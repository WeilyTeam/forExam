// 用户相关接口
const {
    register, login, loginout, userinfo, modify
} = require("../controller/users");

let express = require('express');
let router = express.Router();


//注册接口
router.post('/register', register);
//登陆接口
router.post('/login', login);
//注销接口
router.all("/logout", loginout);
//获取用户信息
router.get("/userinfo", userinfo)
// 用户修改信息
router.put("/modify", modify)

module.exports = router;
