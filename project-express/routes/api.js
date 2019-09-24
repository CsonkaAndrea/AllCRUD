const express = require('express');
const router = express.Router();
const ProductDB = require('../modules/productDB');
const productDB = new ProductDB();



router.get('/products', async (req, res, next) => {
    let result = await productDB.getAllProducts();
    res.json(result);
});

router.get('/products/:id', async (req, res, next) => {
    let result = await productDB.getOneProduct();
    res.json(result);
});

router.post('/products/:id', async (req, res, next) => {
    let result = await productDB.createProduct(req.body);
    res.json(result);
});

router.delete('/products/:id', async (req, res, next) => {
    let result = await db.deleteProduct(req.params.id);
    res.json(result);
});



module.exports = router;