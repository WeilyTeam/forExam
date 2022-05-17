let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let middles = require('./middles/middles');
let session = require('express-session');
let _ = require('lodash');
let fileUpload = require('express-fileupload');
let cors = require('cors');

let indexRouter = require('./routes/index');
let mainRouter = require('./routes/main');
// let cors = require("cors")
let app = express();


// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "public")));

// app.use(cors())


// 使用中间件对不同的路由进行优先处理

app.use("/api/user", indexRouter);


app.use('/api/main', mainRouter);
// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);

});

module.exports = app;
