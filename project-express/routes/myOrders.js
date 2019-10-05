const express = require('express');
const router = express.Router();
const OrderService = require('../services/orderService');
const DB = require('../modules/DB');

const orderService = new OrderService();
const db = new DB();


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