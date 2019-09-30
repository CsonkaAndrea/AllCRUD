const express = require('express');
const router = express.Router();
const BasketLogic = require('./../modules/basketLogic');
const basketLogic = new BasketLogic();

router.post('/', async (req, res, next) => {
    let basketID = 1;
    let basketData = await basketLogic.getData(basketID);
    console.log(basketData);

});

module.exports = router;