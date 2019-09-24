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
    console.log(req.body.customerFirstName);
    /* let result = await usersDB.createUser(req.body);
    res.json(result); */
});

module.exports = router;
