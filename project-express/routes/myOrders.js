const express = require('express');
const router = express.Router();
const OrderDB = require('../modules/orderDB');
const DB = require('../modules/DB');

const db = new DB();
const orderDB = new OrderDB;


router.get('/', async (req, res, next) => {
    let customerID = 1;
    let orders = await db.getSqlData(customerID);

    res.render('myOrders', {
        title: 'My orders',
        orders: orders,
        user: req.user || {}
    });
});

module.exports = router;