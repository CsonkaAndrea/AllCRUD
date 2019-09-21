var express = require('express');
var router = express.Router();
const ProductDB = require('../modules/productDB');
const productDB = new ProductDB();


/* GET home page. */

router.get('/:id', async (req, res, next) => {
    const productOne = await productDB.getOneProduct(req.params.id);

    console.log(`indexes ${productOne}`)

    res.json(productOne);
});

module.exports = router;
