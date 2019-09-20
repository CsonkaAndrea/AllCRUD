var express = require('express');
var router = express.Router();
const ProductDB = require('../modules/product');
const productDB = new ProductDB();

/* GET home page. */

router.get('/', async (req, res, next) => {
  console.log(productDB)

  res.json(productDB);
});

module.exports = router;
