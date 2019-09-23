var express = require('express');
var router = express.Router();
const ProductDB = require('../modules/productDB');
const productDB = new ProductDB();


router.get('/', async (req, res, next) => {
    const productsAll = await productDB.getAllProducts();

    console.log(`indexes ${productDB}`)

    res.json(productsAll);
});

module.exports = router;