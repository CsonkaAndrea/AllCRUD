var express = require('express');
var router = express.Router();
const UsersDB = require('./../modules/usersDB');
const usersDB = new UsersDB();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('register', { title: 'Create an Account' });
});

// Create user
router.post('/users', async (req, res, next) => {
    let result = await usersDB.createUser(req.body);
    res.render('success', {
        title: 'Registration successful',
        user: req.body
    });
    // res.redirect('/');
});

module.exports = router;
