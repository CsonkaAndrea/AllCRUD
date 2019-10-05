const express = require('express');
const router = express.Router();
const ProductService = require('../services/productService');

const productService = new ProductService();


router.get('/', async (req, res, next) => {
    let productAll = [];
    if (req.query.dir) {
        if (req.query.dir === 'asc') {
            productAll = await productService.showAscProduct();
        } else {
            productAll = await productService.showDescProduct();
        }
    } else {
        productAll = await productService.showAscProduct();
    };
    res.render('productsAll', {
        title: 'Products',
        products: productAll,
        url: req.url,
        user: req.user || {},
    });
});

router.get('/:address', async (req, res, next) => {
    const product = await productService.getOneProductSeo(req.params.address);

    if (product === undefined) {
        res.render('error', {
            massage: 'Product not exist.'
        });
    } else {
        res.render('product', {
            title: `Product ${req.params.address}`,
            product: product,
            user: req.user || {},
        });
    };
})



module.exports = router;