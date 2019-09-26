var express = require('express');
var router = express.Router();
const UsersDB = require('../modules/usersDB');
const usersDB = new UsersDB();

const getToken = (l = 20) => {
    let result = '';
    for (let i = 0; i < l; i++) {
        let index = Math.round(Math.random() * 50 + 65);
        result += String.fromCharCode(index);
    }
    return result;
};

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('adminLogin', { title: 'Welcome to the admin page' });
});

router.post('/', async (req, res, next) => {
    let result = await usersDB.login(req.body);
    if (result.length === 1) {
        let token = getToken();
        res.cookie('uuid', token);
        await usersDB.setUserToken(result[0].id, token);
        return res.redirect('/');
    }
    res.render('adminLogin', { title: 'alma' });
});

module.exports = router;
