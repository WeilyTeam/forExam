let createError = require("http-errors");
let express = require("express");
let path = require("path");
// let cookieParser = require("cookie-parser");
let logger = require("morgan");
let middles = require('./middles/middles');

let indexRouter = require('./routes/index');
let productRouter = require('./routes/products');
let cartRouter = require('./routes/cart');
let app = express();
let express_jwt = require('express-jwt');
let cors = require("cors")
// let jwt = require('jsonwebtoken')


// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors())
// app.all("*",function
//     (req,res,next) {
//       //设置允许跨域的域名，*代表允许任意域名跨域
//       res.header("Access-Control-Allow-Origin", "*");
//       //允许的header类型
//       res.header("Access-Control-Allow-Headers", "content-type");
//       //跨域允许的请求方式
//       res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
//       if (req.method.toLowerCase() == 'options')
//         res.send({ret: 1, message: '测试'});  //让options尝试请求快速结束
//       else
//         next();
//       }
// );




app.use(middles.base);
app.use('/user', indexRouter);

//to-do 添加在middles.denyInvalidUser并不会校验？？
app.use( express_jwt({
  secret: "123456",
  algorithms: ['HS256'],
  withCredentials: true
}).unless({
  path: ['/user/login', '/user/register']
}));

app.use(middles.denyInvalidUser);


app.use('/product', productRouter);

app.use('/cart', cartRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log('123');
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    //
      res.status(401).send({ret:-1,msg:'token验证失败'})
  };
  console.log(err.message)
  res.send({msg: err.message});
});



module.exports = app;
