//加载mysql数据库连接库
const mysql = require("mysql2");
const config = require("./config")
//调用mysql.createPool方法创建书库连接池
const pool = mysql.createPool(config);

// 中间信息查询确认,实际上线就干掉
pool.on('acquire', function (connection) {
    console.log('Connection %d acquired', connection.threadId);
});
pool.on('connection', function (connection) {
    connection.query('SET SESSION auto_increment_increment=1')
});
pool.on('enqueue', function () {
    console.log('Waiting for available connection slot');
});
pool.on('release', function (connection) {
    console.log('Connection %d released', connection.threadId);
});

module.exports = pool;
