var express = require('express');
var router = express.Router();
const ProductDB = require('../modules/productDB');
const productDB = new ProductDB();


/* GET home page. */

router.get('/', async (req, res, next) => {
    const productAll = await productDB.getAllProducts();

    res.render('index');
});

module.exports = router;