//加载mysql数据库连接库
let mysql=require("mysql2");

//调用mysql.createPool方法创建商品连接池
let pool  = mysql.createPool({
  connectionLimit : 10,
  multipleStatements:true,
  host            : '127.0.0.1',
  user            : 'root',
  password        : 'root',
  database        : 'shopsystem'
});

//以下方法均未监控作用，可以不写
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

module.exports=pool;