const jwt = require('jsonwebtoken');
const secretKey = '123114655sad46aa';
const infoType = {'content-type': 'application/json'}

const verify = (token, callback) => {
    jwt.verify(
        token,
        secretKey,
        callback);
}

function createToken(userId){
    let token=jwt.sign({
        userId
      },secretKey,{
        expiresIn:'1h'
      })
    return token;
}

function denyInvalideUser(req, res, next) {
    if (req.body.user_id) {
        let token = req.body.token;
        console.log(req.body.token)
        verify(token, (err) => {
            if (err) {
                const msg = {
                    msg: '无权限'
                }
                res.status(403).send(msg)
            }
            next();
        })
    } else {
        res.redirect("/")
    }
}


module.exports = {
    denyInvalideUser,
    createToken
};
