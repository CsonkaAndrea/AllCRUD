var express = require('express');
var router = express.Router();
const LoginDB = require('../modules/loginDB');
const loginDB = new LoginDB();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('loginAdmin', { title: 'Admin Login' });
});

router.post('/', async (req, res, next) => {
    const userId = await loginDB.loginUser('admins', req.body);
    if (userId > 0) {
        const token = await loginDB.createToken('admins', userId);
        res.cookie('adminCookie', token, { maxAge: 31556952000 });
        res.redirect('/api/admin/dashboard');
    } else {
        const message = 'You did not sign correctly, please try again!';
        res.render('login', { notRegistered: message });
    }
});

router.get('/logout', (req, res, next) => {
    res.clearCookie('adminCookie');
    res.redirect('/');
});

module.exports = router;
