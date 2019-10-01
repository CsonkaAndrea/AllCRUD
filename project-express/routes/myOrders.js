const express = require('express');
const router = express.Router();
const BasketLogic = require('./../modules/basketLogic');
const basketLogic = new BasketLogic;

router.get('/', (req, res, next) => {
    res.json('myorders works!')
});

router.post('/', (req, res, next) => {
    console.log(req.body.basketID);
    res.end()
});




module.exports = router;