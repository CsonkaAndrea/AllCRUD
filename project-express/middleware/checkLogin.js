var express = require('express');
var router = express();
const LoginDB = require('./../modules/loginDB');
const loginDB = new LoginDB();


router.use(async (req, res, next) => {
    let user = await loginDB.checkLogin(req);
    if (user) {
        req.user = user;      
    };
    next();
});


module.exports = router;