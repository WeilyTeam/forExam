const {
    register,
    login,
    logout,
    userinfo,
    addAddress,
    deleteAddress,
    getMyAddress} = require('../controller/users')
let express = require('express');
let router = express.Router();

//默认根接口
router.get('/user', (req, res, next) => {
    // res.render('index');
});

//注册
router.post('/register', register);
//登录
router.post('/login', login);
//注销
router.delete('/logout', logout);
//获取用户信息
router.get('/userinfo', userinfo);

router.post('/addAddress', addAddress);

router.delete('/deleteAddress', deleteAddress);

router.get('/getMyAddress', getMyAddress)

module.exports = router;
