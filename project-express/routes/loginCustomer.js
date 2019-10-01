var express = require('express');
var router = express.Router();
const LoginDB = require('../modules/loginDB');
const loginDB = new LoginDB();
const RegisterDB = require('../modules/registerDB');
const registerDB = new RegisterDB();



/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('loginCustomer', { title: 'Login' });
});


//// WTF is going on in my code????????

router.get('/logout', (req, res, next) => {
    res.clearCookie('custvalidator');
    res.clearCookie('adminvalidator');
    res.redirect('/products');
});

router.post('/', async (req, res, next) => {
    let userId = await loginDB.loginUser(req.body);
    res.redirect('/product');
});


module.exports = router;
