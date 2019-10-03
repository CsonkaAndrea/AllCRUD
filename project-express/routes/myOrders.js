var express = require('express');
var router = express.Router();
const OrderDB = require('../modules/orderDB');
const orderDB = new OrderDB;
const DB = require('../modules/DB');
const db = new DB();

const BetagDB = require('./../modules/webshop-mariadb');
const betagdb = new BetagDB();

router.get('/', async (req, res, next) => {
    let customerID = 1;
    let orders = await db.getSqlData(customerID);
    console.log(orders);

    res.render('myOrders', {
        title: 'My orders',
        orders: orders,
    });

});

router.post('/', async (req, res, next) => {
    let userID = 1;
    /*
        IDE ÍRD MEG, AMI LEKÉRDEZI A USER ID-t
    */
    let data = betagdb.readRecord('basketdetails', {
        from: 'INNER JOIN baskets ON baskets.id = basketdetails.basketID',
        'baskets.customerId': userID,
    });
    data = data.filter(record => record.hasOwnProperty('id'));
    
    await betagdb.createRecord('basketdetails', {
        basketID: 6,
        productID: 2,
    })


    // let productsAndBasketdetails = betagdb.readRecord('basketdetails', {
    //     from: 'INNER JOIN products ON basketdetail.productID = products.id',
    //     select: 'products.price as price, basketdetails.basketQuantity as quantity',
    //     customerId: userID,
    // });

    // let customerID = 1;
    // let newOrder = await db.createSqlData(customerID);
    // console.log(newOrder);

    // res.render('myOrders', {
    //     title: 'My orders',
    //     newOrder: newOrder,
    // });
 });

module.exports = router;