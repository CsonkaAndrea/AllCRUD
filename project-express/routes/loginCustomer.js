const express = require('express');
const router = express.Router();
const LoginDB = require('../modules/loginDB');

const loginDB = new LoginDB();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('loginCustomer', { title: 'Login' });
});

router.post('/', async (req, res, next) => {
    const userId = await loginDB.loginUser('customers', req.body);
    if (userId > 0) {
        const token = await loginDB.createToken('customers', userId);
        res.cookie('customerCookie', token, { maxAge: 31556952000 });
        res.redirect('/products');
    } else {
        res.render('login', { notRegistered: message });
    }
});

router.get('/logout', (req, res, next) => {
    res.clearCookie('customerCookie');
    res.redirect('/products');
});

module.exports = router;
