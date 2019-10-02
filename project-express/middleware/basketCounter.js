var express = require('express');
var router = express();
const BasketLogic = require('./../modules/basketLogic');
const basketLogic = new BasketLogic();


/* router.use((req, res, next) => {

}) */

/* 
  // Get logged in user's basker ID
  let loggedInUserBasket = await basketLogic.getBasketId(req);
  let basketID = loggedInUserBasket.id;
  // Count products in basket
  let basketItemCounter = await basketLogic.countBasketItems(basketID);
  user.prodsInBasket = basketItemCounter[0].sumOfProds;
 */
module.exports = router;