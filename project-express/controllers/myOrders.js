const express = require('express');
const router = express.Router();
const OrderService = require('../services/orderService');
const Models = require('../models/models');

const orderService = new OrderService();
const models = new Models();


router.get('/', async (req, res, next) => {
    let customerID = 1;
    let orders = await models.getSqlData(customerID);

    res.render('myOrders', {
        title: 'My orders',
        orders: orders,
        user: req.user || {}
    });
});

module.exports = router;