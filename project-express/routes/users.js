var express = require('express');
var router = express.Router();
const ProductDB = require('../modules/productDB');
const productDB = new ProductDB();

<<<<<<< HEAD

router.get('/', async (req, res, next) => {


  res.json('alma');
=======
/* GET users listing. */
router.get('/', async (req, res, next) => {
  const rest = await productDB.createRestful();

  console.log(`useres ${rest}`)

  res.json(rest);
>>>>>>> card03
});




module.exports = router;
