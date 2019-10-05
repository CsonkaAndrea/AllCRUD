const express = require('express');
const router = express();
const LoginDB = require('./../modules/loginDB');

const loginDB = new LoginDB();


router.use(async (req, res, next) => {
    let admin = await loginDB.checkLogin(req.cookies.adminCookie);
    let user = await loginDB.checkLogin(req.cookies.customerCookie);

    if (admin) {
        req.admin = admin;
    };

    if (user) {
        req.user = user;
    };

    next();
});


module.exports = router;