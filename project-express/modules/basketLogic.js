const DB = require('./DB');
const db = new DB();

module.exports = class basketDB {
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
        let result = await db.getDataFromSql(sql);
        return result;
    };

    // Get table data from sql 
    async getTable(tableName) {
        let result = await db.readAll(tableName);
        return result;
    };

    // Add to basket
    async addData(basketDetailObject) {
        let result = await db.create(basketDetailObject, 'basketdetails');
        return result;
    };

    // Remove from basket
    async removeFromBasket(prodID) {
        console.log(prodID);
        let result = await db.delete('basketdetails', {productID: prodID} );
        return result;
    };
}