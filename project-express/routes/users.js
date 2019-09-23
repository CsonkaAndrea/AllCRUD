var express = require('express');
var router = express.Router();
const ProductDB = require('../modules/productDB');
const productDB = new ProductDB();


router.get('/', async (req, res, next) => {
  const rest = await productDB.createRestful();

  console.log(`useres ${rest}`)

  res.json(rest);
});




module.exports = router;
