var express = require('express');
var router = express.Router();
const AdminDB = require('./../modules/adminDB');
const adminDB = new AdminDB();


router.get('/admin/register', function (req, res, next) {
    res.render('register', { title: 'Create an Account' });
});

// Create admin
router.post('/admin', async (req, res, next) => {
    let result = await adminDB.createAdmin(req.body);
    res.render('success', {
        title: 'Registration successful',
        user: req.body
    });
});

module.exports = router;
