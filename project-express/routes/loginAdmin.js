var express = require('express');
var router = express.Router();
const LoginDB = require('../modules/loginDB');
const loginDB = new LoginDB();
const RegisterDB = require('../modules/registerDB');
const registerDB = new RegisterDB();



/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('loginAdmin', { title: 'Admin Login' });
});

router.post('/', async (req, res, next) => {
    const userId = await loginDB.loginAdmin(req.body);
    if (userId > 0) {
        const token = await loginDB.createToken(userId);
        res.cookie('adminCookie', token, { maxAge: 31556952000 });
        res.redirect('/api/dashboard');
    } else {
        const message = 'You did not sign correctly, please try again!';
        res.render('login', { notRegistered: message });
    }
});


module.exports = router;
