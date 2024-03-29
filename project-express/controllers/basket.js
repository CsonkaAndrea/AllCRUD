const express = require('express');
const router = express.Router();
const BasketService = require('../services/basketService');
const basketService = new BasketService();

router.get('/order', (req, res, next) => {
    req.user.prodsInBasket = 0;
    res.render('index', {
        title: 'Index',
        user: req.user || {}
    })
});

// Display /basket
router.get('/', async (req, res, next) => {
    let loggedInUserBasket = await basketService.getBasketId(req);
    let basketID = loggedInUserBasket.id;
    let basket = await basketService.getData(basketID);

    if (basket.length == 0) {
        res.render('basket', {
            basket: undefined,
            user: req.user || {}
        });
    } else {
        //  Sum basket value
        let sumOfBasketPrice = 0;
        for (let i = 0; i < basket.length; i++) {
            sumOfBasketPrice += parseInt(basket[i].price);
        };

        res.render('basket', {
            basket: basket,
            sumOfBasketPrice: sumOfBasketPrice,
            user: req.user || {}
        });
    };
});

// Add data to basketdetails
router.post('/', async (req, res, next) => {
    let loggedInUserBasket = await basketService.getBasketId(req);
    let basketID = loggedInUserBasket.id;
    // The customer wants to see this product in his/her basket
    const productToBasket = req.headers.referer.split('/')[4];
    // Get all products
    const products = await basketService.getTable('products');
    // Find product ID
    let productID = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].seoFriendlyProductName === productToBasket) {
            productID = products[i].id
            break;
        };
    };

    // Ongoing! in this development phase user login dont works
    let basketDetail = {
        basketID: basketID,
        productID: productID,
        basketQuantity: 1,
    };

    // Add product to basket ( if product is already added show error massage)
    const basketDetails = await basketService.getTable('basketdetails');
    for (let i = 0; i < basketDetails.length; i++) {
        if (basketDetails[i].productID === productID) {
            return console.log('You already added this product.');
        };
    };
    await basketService.addData(basketDetail);
    res.end();
});

router.delete('/', async (req, res, next) => {
    await basketService.removeFromBasket(parseInt(req.body.prodID));
    let loggedInUserBasket = await basketService.getBasketId(req);
    let basketID = loggedInUserBasket.id;
    // Send the sum value of the basket (after delete)
    let basket = await basketService.getData(basketID);
    let sumOfBasketPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        sumOfBasketPrice += parseInt(basket[i].price);
    };
    res.json({
        sum: sumOfBasketPrice
    });

});

module.exports = router;