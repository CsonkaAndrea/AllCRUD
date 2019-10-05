const express = require('express');
const router = express.Router();
const RegisterDB = require('../modules/registerDB');

const registerDB = new RegisterDB();


/* GET home page. */
router.get('/', async (req, res, next) => {
    res.render('registerCustomer', { title: 'Create an Account' });
});

router.post('/', async (req, res, next) => {
    let register = await registerDB.registerUsers(req.body);
    res.redirect('login');
});

module.exports = router;
