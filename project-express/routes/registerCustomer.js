var express = require('express');
var router = express.Router();
const RegisterDB = require('../modules/registerDB');
const registerDB = new RegisterDB();


/* GET home page. */
router.get('/', async (req, res, next) => {
    res.render('register', { title: 'Create an Account' });
});


router.post('/', async (req, res, next) => {
    console.log(req.body);
    let register = await registerDB.registerUsers(req.body);
    res.redirect('login');
});


module.exports = router;
