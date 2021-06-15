let express = require('express');

//调用数据访问层功能

const {current,getPublicU,PublicUserSong} = require("../controller/main");

let router = express.Router();
/* GET users listing. */

//获取当前未完成任务
router.post('/current', current);
// 发布新TODO
router.post('/getPublicU', getPublicU);

router.post('/PublicUserSong', PublicUserSong);


module.exports = router;
