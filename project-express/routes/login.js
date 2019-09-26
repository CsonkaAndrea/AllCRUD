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
    let result = await usersDB.login(req.body);
    if (result.length === 1) {
        let token = getToken();
        res.cookie('uuid', token);
        await usersDB.setUserToken(result[0].id, token);
        return res.redirect('/');
    }
    res.render('login', { title: 'alma' });
});

module.exports = router;
