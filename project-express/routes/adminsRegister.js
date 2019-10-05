const express = require('express');
const router = express.Router();
const RegisterDB = require('../modules/registerDB');

const registerDB = new RegisterDB();


router.get('/', (req, res, next) => {
    res.render('admin');
});

router.post('/admin/login', async (req, res, next) => {
    let result = await registerDB.registerAdmins(req.body);
    res.render('success', {
        title: 'Registration successful',
        user: req.body
    });
});

module.exports = router;
