var express = require('express');
var router = express.Router();
const OrderDB = require('../modules/orderDB');
const orderDB = new OrderDB;
const DB = require('../modules/DB');
const db = new DB();

router.get('/', async (req, res, next) => {
    let customerID = 1;
    let orders = await db.getSqlData(customerID);
    console.log(orders);

    res.render('myOrders', {
        title: 'My orders',
        orders: orders,
    });

});

/* router.post('/', async (req, res, next) => {
    let customerID = 1;
    let newOrder = await db.createSqlData(customerID);
    console.log(newOrder);

    res.render('myOrders', {
        title: 'My orders',
        newOrder: newOrder,
    });

 }); */

module.exports = router;