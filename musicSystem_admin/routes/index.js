
const {register, login, changeMyPublic,getMyPublic,userinfo,fileupload,getUserInfoByToken} = require("../controller/users");

let express = require('express');
let router = express.Router();


//注册接口
router.post('/register', register);
//登陆接口
router.post('/login', login);
//获取用户信息
router.get("/userinfo",userinfo)

router.post('/fileupload',fileupload)

router.post('/getStatus',getMyPublic)

router.post('/changeStatus',changeMyPublic)

router.post('/getProfile',getUserInfoByToken)
module.exports = router;
