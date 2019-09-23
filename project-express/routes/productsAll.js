var express = require('express');
var router = express.Router();
const ProductDB = require('../modules/productDB');
const productDB = new ProductDB();


router.get('/', async (req, res, next) => {
    const productsAll = await productDB.getAllProducts();

    console.log(`indexes ${productDB}`)

    res.json(productsAll);
});

router.get('/:id', async (req, res, next) => {
    const product = await productDB.getOneProduct(req.params.id);
    res.render('product', {
        title: `Product ${req.params.id}`,
        product: product
    })
})

module.exports = router;