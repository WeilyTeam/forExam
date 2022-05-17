let express = require('express');
const {start_todo} = require("../controller/todo");

//调用数据访问层功能

const {
    current,
    new_todo,
    end_todo,
    history_todo,
    share_todo,
    get_share_todo,
    del_share_todo
} = require("../controller/todo");

let router = express.Router();
/* GET users listing. */

//获取当前未完成todo
router.get('/current', current);
// 发布新TODO
router.post('/new_todo', new_todo);
// 更改Todo状态
router.put('/end', end_todo);
router.put('/start', start_todo);
// 历史Todo
router.get('/history', history_todo);
// 分享 Todo
router.put('/share_todo', share_todo);
// 获取所有的分享的Todo、
router.get('/get_share_todo', get_share_todo);
//取消分享 Todo
router.delete('/del_share_todo', del_share_todo);


module.exports = router;
