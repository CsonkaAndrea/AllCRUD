const Modules = require('../modules/modules');

const modules = new Modules();

module.exports = class basketLogic {
    async getData(basketID) {
        let sql = `
            SELECT 
            products.id AS prodID,
            products.productName, 
            products.productCategory, 
            products.publisher, 
            products.price,
            products.stock,
            basketdetails.basketID,
            basketdetails.basketQuantity
            FROM ((products INNER JOIN basketdetails ON products.id = basketdetails.productID) 
                INNER JOIN baskets ON baskets.id = basketdetails.basketID) 
                INNER JOIN customers ON baskets.customerId = customers.id
            WHERE basketdetails.basketID = ${basketID}
            `;
        let result = await modules.getDataFromSql(sql);
        return result;
    };

    // Get table data from sql 
    async getTable(tableName) {
        let result = await modules.readAll(tableName);
        return result;
    };

    // Add to basket
    async addData(basketDetailObject) {
        let result = await modules.create(basketDetailObject, 'basketdetails');
        return result;
    };

    // Remove from basket
    async removeFromBasket(prodID) {
        let result = await modules.delete('basketdetails', {
            productID: prodID
        });
        return result;
    };

    async getBasketId(req) {
        const basket = await modules.read('baskets', 'customerID', req.user.id);
        return basket;
    };

    async countBasketItems(basketID) {
        let sql = `
            SELECT count(productID) AS 'sumOfProds'          
            FROM (baskets INNER JOIN basketdetails ON baskets.id = basketdetails.basketID)                 
            WHERE basketdetails.basketID = ${basketID}`;
        let result = await modules.getDataFromSql(sql);
        return result;
    };
}