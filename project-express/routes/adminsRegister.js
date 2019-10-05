const express = require('express');
const router = express.Router();
const RegisterService = require('../modules/registerDB');

const registerService = new RegisterService();


router.get('/', (req, res, next) => {
    res.render('admin');
});

router.post('/admin/login', async (req, res, next) => {
    let result = await registerService.registerAdmins(req.body);
    res.render('success', {
        title: 'Registration successful',
        user: req.body
    });
});

module.exports = router;
