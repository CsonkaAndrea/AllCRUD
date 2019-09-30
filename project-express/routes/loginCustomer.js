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

router.post('/', async (req, res, next) => {
    let userId = await loginDB.loginUser(req.body);
    res.redirect('/product');

});


module.exports = router;
