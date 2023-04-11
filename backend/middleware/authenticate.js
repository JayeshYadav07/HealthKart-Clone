const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticate = function (req, res, next) {
    let token = req.headers.authorization;
    jwt.verify(token, process.env.tokenKey, function (err, decoded) {
        if (decoded) {
            req.body.userId = decoded.userId;
            next();
        } else {
            res.send({ msg: "Login First!" });
        }
    });
};

module.exports = {
    authenticate,
};
