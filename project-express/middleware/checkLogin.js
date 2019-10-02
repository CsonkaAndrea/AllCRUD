var express = require('express');
var router = express();
const LoginDB = require('./../modules/loginDB');
const loginDB = new LoginDB();


router.use(async (req, res, next) => {
    let admin = await loginDB.checkLogin(req.cookies.adminCookie);
    let user = await loginDB.checkLogin(req.cookies.customerCookie);
    console.log(`appban user:: ${user}`);
    console.log(`appban admin:: ${admin}`);

    if (admin) {
        req.admin = admin;
    };
    if (user) {
        req.user = user;
    };

    next();
});


module.exports = router;