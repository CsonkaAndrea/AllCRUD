const express = require('express');
const router = express.Router();
const LoginService = require('../services/loginService');

const loginService = new LoginService();


router.get('/', async (req, res, next) => {
    const loggedInAdmin = await loginService.checkLogin(req.cookies.adminvalidator);
    if (loggedInAdmin) {
        res.render('admin');
    }
    res.redirect('/');
});

router.get('/*', async (req, res, next) => {
    const loggedInAdmin = await loginService.checkLogin(req.cookies.adminvalidator);
    if (loggedInAdmin) {
        res.redirect('/admin');
    }
    res.redirect('/');
});

module.exports = router;