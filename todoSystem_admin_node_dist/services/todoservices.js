const pool = require('../dao/pool');
const jwt = require('jsonwebtoken');
const secretKey = '123114655sad46aa';
const verify = (token, callback) => {
    jwt.verify(
        token,
        secretKey,
        callback);
}

/**
 * @param {number} userId
 * @param {function} callback
 * @return {void}
 * */
//查找指定用户所有的任务
function getAllTodo({token}, callback) {
    verify(token, (err, {user_id}) => {
        pool.query(
            `select 
                todo_id,
                todo_content,
                todo_status,
                todo_created_time,
                todo_set_finish_time
            from todo_log 
            where user_id=?`,
            [user_id],
            callback
        );
    })

}

/**
 * @param {number} userId
 * @param {function} callback
 * @return {void}
 * */
//查找指定用户已完成任务
function getHistoryTodo({token}, callback) {
    verify(token, (err, {user_id}) => {
        pool.query(
            `select 
                todo_id,
                todo_content,
                todo_status,
                todo_created_time,
                todo_set_finish_time
                from todo_log 
                where status =1 and user_id=?`,
            [user_id],
            callback
        );
    })
}

/**
 * @param {number} token
 * @param {function} callback
 * @return {void}
 * */
//查找指定用户进行中的任务
function getNowTask({token}, callback) {
    verify(token, (err, {user_id}) => {
        pool.query(
            `select 
                todo_id,
                todo_content,
                todo_status,
                todo_created_time,
                todo_set_finish_time,
                todo_shared_status
                from todo_log 
                where  user_id=?`,
            [user_id],
            callback
        );
    })
}

/**
 * @param {number} todo_id
 * @param {function} callback
 * @return {void}
 * */
//结束一个任务
function setEndTodo({todo_id}, callback) {
    console.log("end",todo_id)

    pool.query(
        `update todo_log set
                    todo_status=0
                     where todo_id=?`,
        [ todo_id],
        callback
    )
}
//开始一个任务
function setStartTodo({todo_id}, callback) {
    console.log("start",todo_id)

    pool.query(
        `update todo_log set
                    todo_status=1
                     where todo_id=?`,
        [todo_id],
        callback
    )
}


/**
 * @param {string} todo_content
 * @param {number} user_id
 * @param {function} callback
 * */
//创建一个新任务
function createTodo({
                        todo_content,
                        token,
                    }, callback) {
    verify(token, (err, {user_id}) => {
        pool.query(
            `insert into todo_log(
                        user_id,
                        todo_content )
                        values(?,?)`,
            [user_id, todo_content],
            callback
        );
    })
}

function setShare({todo_id}, callback) {
    pool.query(
        `update todo_log set
               todo_shared_status=1
               where todo_id=?`,
        [todo_id],
        callback
    );

}

function delShare({todo_id}, callback) {
    pool.query(
        `update todo_log set
               todo_shared_status=0
               where todo_id=?`,
        [todo_id],
        callback
    );

}

function getShareTodo(callback) {
    pool.query(
        `select * from todo_log where todo_shared_status=1 `,
        [],
        callback
    );
}

//提供给其它模块使用
module.exports = {
    getHistoryTodo,
    createTodo,
    setEndTodo,
    getNowTask,
    getAllTodo,
    getShareTodo,
    setShare,
    delShare,
    setStartTodo

};
