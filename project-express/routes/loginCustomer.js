var express = require('express');
var router = express.Router();
const LoginDB = require('../modules/loginDB');
const loginDB = new LoginDB();
const RegisterDB = require('../modules/registerDB');
const registerDB = new RegisterDB();



/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', { title: 'Login' });
});

router.get('/logout', (req, res, next) => {
    res.render('loginCustomer', { title: 'Login' });
});

router.post('/', async (req, res, next) => {
    const userId = await loginDB.loginUser('customers', req.body);
    if (userId > 0) {
        const token = await loginDB.createToken('customers', userId);
        res.cookie('customerCookie', token, { maxAge: 31556952000 });
        res.redirect('/products');
    } else {
        const message = 'You did not sign correctly, please try again!';
        res.render('login', { notRegistered: message });
    }
});

router.get('/logout', (req, res, next) => {
    res.clearCookie('adminCookie');
    res.redirect('/products');
});

module.exports = router;
