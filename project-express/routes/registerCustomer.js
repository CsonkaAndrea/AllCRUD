const express = require('express');
const router = express.Router();
const RegisterService = require('../services/registerService');

const registerService = new RegisterService();


/* GET home page. */
router.get('/', async (req, res, next) => {
    res.render('registerCustomer', { title: 'Create an Account' });
});

router.post('/', async (req, res, next) => {
    let register = await registerService.registerUsers(req.body);
    res.redirect('login');
});

module.exports = router;
