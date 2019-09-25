var express = require('express');
var router = express.Router();
const ProductDB = require('../modules/productDB');
const productDB = new ProductDB();


router.get('/', async (req, res, next) => {
    const productAll = await productDB.getAllProducts();
    console.log(productAll[0]);

    res.render('productsAll', {
        title: 'Products',
        products: productAll
    });
});

router.get('/:address', async (req, res, next) => {
    const product = await productDB.getOneProductSeo(req.params.address);
    if (product === undefined) {
        res.render('error', {
            massage: 'Product not exist.'
        });
    } else {
        res.render('product', {
            title: `Product ${req.params.address}`,
            product: product
        });
    };
})



module.exports = router;