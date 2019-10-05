const express = require('express');
const router = express.Router();
const OrderService = require('../services/orderService');
const Modules = require('../modules/modules');

const orderService = new OrderService();
const modules = new Modules();


router.get('/', async (req, res, next) => {
    let customerID = 1;
    let orders = await modules.getSqlData(customerID);

    res.render('myOrders', {
        title: 'My orders',
        orders: orders,
        user: req.user || {}
    });
});

module.exports = router;