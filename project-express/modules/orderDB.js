const DB = require('./DB');
const db = new DB();

module.exports = class orderDB {

    async getAllOrders(tableName) {
        let result = await db.readAll(tableName);
        return result;
    };

    async createSqlData() {
        // első sql a select a basket táblákból, kezelni kell valahogy, ha több termék van a basketben
        let basketSql = `
        SELECT *
        FROM basketdetails
        INNER JOIN baskets
        ON baskets.id=basketdetails.basketID
        WHERE baskets.customerId=${user.id}; 
        ` ;
        // let sql = `
        // INSERT INTO orders (customerId, orderStatus, orderValue, deliveryId)
        // VALUES (${}, 1, 7600, 1);
        // `;
        let result = await db.create(order, 'orders');
        console.log(basketSql);
       /*         BEGIN;
        INSERT INTO orders (customerId, orderStatus, orderValue, deliveryId)
        VALUES (1, 1, 7600, 1);
        INSERT INTO orderdetails (orderID, customerID, productID, netPrice, orderQuantity)
        VALUES (LAST_INSERT_ID(), 1, 1, 7600, 1);
        COMMIT; */

    }

    async getAllOrders() {
        const result = await db.readAll(this.tableName);
        return result;
    };

    async getOneOrder(id) {
        const result = await db.readOne(this.tableName, id);
        return result;
    };

    async createOrder(object) {
        const result = await db.create(this.tableName, object);
        return result;
    };

    async updateOrder(object) {
        const result = await db.update(object, this.tableName);
        return result;
    };

    async deleteOrder(object) {
        const result = await db.delete(this.tableName, object);
        return result;
    };
}