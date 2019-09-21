var express = require('express');
var router = express.Router();
const ProductDB = require('../modules/product');
const productDB = new ProductDB();

/* GET home page. */

router.get('/', async (req, res, next) => {
  const productsAll = await productDB.getAllProducts();

  console.log(`indexes ${productDB}`)

  res.json(productsAll);
});

module.exports = router;
