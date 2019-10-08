const express = require('express');
const router = express.Router();
const LoginService = require('../services/loginService');

const loginService = new LoginService();

router.get('/*', (req, res, next) => {
    res.render('admin', {});
});


module.exports = router;