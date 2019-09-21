const express = require('express');
const router = express.Router();
const ProductDB = require('../modules/productDB');
const productDB = new ProductDB();


router.get('/users', async (req, res, next) => {
    let result = await productDB.getAllProducts();
    res.json(result);
});

module.exports = router;