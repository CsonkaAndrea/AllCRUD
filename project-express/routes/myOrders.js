var express = require('express');
var router = express.Router();
const OrderDB = require('../modules/orderDB');
const orderDB = new OrderDB;

router.get('/', async (req, res, next) => {
    let customerID = 1;
    let orders = await orderDB.getSqlData(customerID);
    console.log(orders);

    res.render('myOrders', {
        title: 'My orders',
        orders: orders,
    });

});

router.post('/', (req, res, next) => {
    console.log(req.body);
})

module.exports = router;