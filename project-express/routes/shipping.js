const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('shipping', {
        title: 'Shipping',
        user: req.user || {}
    })
});


module.exports = router;