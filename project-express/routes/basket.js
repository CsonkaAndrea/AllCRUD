const express = require('express');
const router = express.Router();
const BasketLogic = require('./../modules/basketLogic');
const basketLogic = new BasketLogic();

// Display /basket
router.get('/', async (req, res, next) => {
    let loggedInUserBasket = await basketLogic.getBasketId(req);
    console.log(`loggedinuserbasket: ${loggedInUserBasket.id}`);
    let basketID = loggedInUserBasket.id;
    let basket = await basketLogic.getData(basketID);
    console.log(basket);
    //  Sum basket value
    let sumOfBasketPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        sumOfBasketPrice += parseInt(basket[i].price);
    };

    res.render('basket', {
        basket: basket,
        sumOfBasketPrice: sumOfBasketPrice
    });
});

// Add data to basketdetails
router.post('/', async (req, res, next) => {
    // The customer wants to see this product in his/her basket
    const productToBasket = req.headers.referer.split('/')[4];
    // Get all products
    const products = await basketLogic.getTable('products');
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
        basketID: 1,
        productID: productID,
        basketQuantity: 1,
    };

    // Add product to basket ( if product is already added show error massage)
    const basketDetails = await basketLogic.getTable('basketdetails');
    for (let i = 0; i < basketDetails.length; i++) {
        if (basketDetails[i].productID === productID) {
            return console.log('You already added this product.');
        };
    };
    basketLogic.addData(basketDetail);
    res.end();
});

router.delete('/', async (req, res, next) => {
    await basketLogic.removeFromBasket(parseInt(req.body.prodID));
    res.end();
});

module.exports = router;