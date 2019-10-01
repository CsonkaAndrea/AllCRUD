var express = require('express');
var router = express.Router();
const OrderDB = require('../modules/orderDB');
const orderDB = new OrderDB;

router.post('/', async (req, res, next) => {
    let basketID = 1;
    let basketData = await basketLogic.getData(basketID);
    console.log(basketData);

});

router.get('/', async (req, res, next) => {
  const myOrders = await orderDB.getAllOrders();
  console.log(myOrders[0]);
  res.render('myOrders', {
      title: 'My orders',
      orders: myOrders
  });
});

router.get('/:address', async (req, res, next) => {
  const order = await orderDB.getOneOrder(req.params.address);

  if (order === undefined) {
      res.render('error', {
          message: 'Order does not exist.'
      });
  } else {
      res.render('order', {
          title: `order ${req.params.address}`,
          order: order
      });
  };
})

module.exports = router;