const express = require('express');
const router = express.Router();
const DB = require('./../modules/DB');
const db = new DB();



router.get('/', async (req, res, next) => {
    let basket = {
        customerId: 10
    };
    let basketDetails = {
        basketID: 10,
        productID: 15,
        basketQuantity: 1,
    };
    await db.create(basketDetails, 'basketdetails');
    /* await db.create(basket, 'baskets'); */

    res.send('alma');
});



module.exports = router;