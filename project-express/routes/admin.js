const express = require('express');
const router = express.Router();
const LoginDB = require('../modules/loginDB');

const loginDB = new LoginDB();


router.get('/', async (req, res, next) => {
    const loggedInAdmin = await loginDB.checkLogin(req.cookies.adminvalidator);
    if (loggedInAdmin) {
        res.render('admin');
    }
    res.redirect('/');
});

router.get('/*', async (req, res, next) => {
    const loggedInAdmin = await loginDB.checkLogin(req.cookies.adminvalidator);
    if (loggedInAdmin) {
        res.redirect('/admin');
    }
    res.redirect('/');
});

module.exports = router;