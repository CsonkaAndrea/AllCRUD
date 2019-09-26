var express = require('express');
var router = express.Router();
const RegisterDB = require('../modules/registerDB');
const registerDB = new RegisterDB();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('register', { title: 'Create an Account' });
});


// Create user
router.post('/users', async (req, res, next) => {
    let result = await registerDB.registerUsers(req.body);
    res.render('success', {
        title: 'Registration successful',
        user: req.body
    });
});


module.exports = router;
