const express = require('express');
const router = express.Router();
const LoginService = require('../services/loginService');

const loginService = new LoginService();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('loginAdmin', { title: 'Admin Login' });
});

router.post('/', async (req, res, next) => {
    const userId = await loginService.loginUser('admins', req.body);
    if (userId > 0) {
        const token = await loginService.createToken('admins', userId);
        res.cookie('adminCookie', token, { maxAge: 31556952000 });
        res.redirect('/api/admin/dashboard');
    } else {
        res.render('login', { notRegistered: message });
    }
});

router.get('/logout', (req, res, next) => {
    res.clearCookie('adminCookie');
    res.redirect('/');
});

module.exports = router;
