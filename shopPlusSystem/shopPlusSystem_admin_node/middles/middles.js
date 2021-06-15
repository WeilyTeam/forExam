const jwt = require('jsonwebtoken');
const secretKey = '123114655sad46aa';
const infoType = {'content-type': 'application/json'}
const whiteList = [""]
const verify = (token, callback) => {
    jwt.verify(
        token,
        secretKey,
        callback);
}


function base(req, res, next) {
    // res.locals.user = {};
    // res.locals.functions = "";
    // if (req.session.user) {
    //     res.locals.logon = true;
    //     res.locals.user = req.session.user;
    // } else {
    //     res.locals.logon = false;
    // }
    next();
}

function denyInvalideUser(req, res, next) {
    // console.log(req.query)
    let token = req.query.token||req.body.token;
    if (token) {
        return verify(token, (err) => {
            if (err) {
                res.status(403).send({msg: '无权限'})
            }
            next();
        })
    }
    return res.send({msg: '无权访问'});
}


module.exports = {
    base,
    denyInvalideUser
};
