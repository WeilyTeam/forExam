const jwt = require('jsonwebtoken');
const secretKey = '6667778899000';
let express_jwt = require('express-jwt');



function base(req, res, next) {
    next();
}

// function write()

function denyInvalidUser(req, res, next) {
    console.log('hhhh')
    // console.log(req)

    next();
}

module.exports = {
    base,
    denyInvalidUser
}