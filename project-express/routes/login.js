var express = require('express');
var router = express.Router();
const UsersDB = require('./../modules/usersDB');
const usersDB = new UsersDB();
const RegisterDB = require('./../modules/registerDB');
const registerDB = new RegisterDB();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', { title: 'Express' });
});

router.post('/', async (req, res, next) => {
    let result = await usersDB.loginUser(req.body);

    res.render('index', { title: 'alma' });
});

module.exports = router;
