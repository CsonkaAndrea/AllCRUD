<<<<<<< HEAD
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Index'
    })
=======
var express = require('express');
var router = express.Router();
const ProductDB = require('../modules/productDB');
const productDB = new ProductDB();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const productAll = await productDB.getAllProducts();

  console.log(`indexes ${productAll}`)

  res.json(productAll);
>>>>>>> card03
});

module.exports = router;