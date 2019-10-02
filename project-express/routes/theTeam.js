const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('theTeam', {
        title: 'The Team',
        user: req.user || {}
    })
});

module.exports = router;