let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let middles = require('./middles/middles');
let indexRouter = require('./routes/index');
let todoRouter = require('./routes/todo');
let cors = require("cors")
let app = express();


app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "public")));


// app.use();

// 使用中间件对不同的路由进行优先处理
app.use(middles.base);

app.use("/api/user", indexRouter);

app.use(middles.denyInvalideUser);

app.use('/api/todo', todoRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
});

module.exports = app;
