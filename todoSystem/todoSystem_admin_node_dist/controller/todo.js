const {setStartTodo} = require("../services/todoservices");
const {delShare} = require("../services/todoservices");
const {
    createTodo,
    setEndTodo,
    getNowTask,
    getAllTodo,
    getShareTodo,
    setShare
} = require("../services/todoservices");

// 获取当前未完成的任务
const current = (req, res, next) => {
    getNowTask(req.query, (err, data,) => {
        console.log(err)
        if (err) {
            return res.send({
                msg: "获取失败",
            })
        }
        console.log(data)
        return res.send({
            list: [...data],
            msg: "获取成功",
        })
    })
}
const new_todo = (req, res, next) => {
    // console.log(req.body)
    createTodo(req.body, (err) => {

        if (err) {
            return res.send({
                msg: "创建失败",
            })
        }
        return res.send({
            msg: "创建成功",
        })
    })
}
const end_todo = (req, res, next) => {

    setEndTodo(req.query, (err,data) => {
        console.log(err)
        console.log(data)
        if (err) {

            return res.send({
                msg: "设置失败",
            })
        }
        return res.send({
            msg: "设置成功",
        })
    })
}
const start_todo = (req, res, next) => {
    console.log(req.query)

    setStartTodo(req.query, (err,data) => {
        console.log(err)
        console.log(data)

        if (err) {
            return res.send({
                msg: "设置失败",
            })
        }
        return res.send({
            msg: "设置成功",
        })
    })
}

const history_todo = (req, res, next) => {
    // const {token} = ;
    getAllTodo(req.body, (err, data, fields) => {
        if (err) {
            return res.send({
                msg: "失败啦",
            })
        }
        return res.send({
            ...data[0],
            msg: "获取成功",
        })
    })
}
const get_share_todo = (req, res, next) => {
    getShareTodo((err, data, fields) => {
        // console.log(err)
        if (err) {
            return res.send({
                msg: "失败啦",
            })
        }
        return res.send({
            list: [...data],
            msg: "获取成功",
        })
    })
}
const share_todo = (req, res, next) => {

    setShare(req.query, (err) => {
        if (err) {
            return res.send({
                msg: "设置失败",
            })
        }
        return res.send({
            msg: "设置成功",
        })
    })
}
const del_share_todo = (req, res, next) => {
    delShare(req.query, (err) => {
        if (err) {
            return res.send({
                msg: "取消失败",
            })
        }
        return res.send({
            msg: "取消成功",
        })
    })
}

module.exports = {
    current,
    new_todo,
    end_todo,
    history_todo,
    get_share_todo,
    share_todo,
    del_share_todo,
    start_todo
}
