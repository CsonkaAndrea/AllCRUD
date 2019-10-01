const DB = require('./DB');
const db = new DB();

module.exports = class orderDB {
    async getSqlData(customerID){
        let sql = `
        SELECT orders.id as orderID,
        orders.orderDate,
        orders.orderStatus,
        products.productName,
        orderdetails.orderQuantity
        FROM ((orders INNER JOIN orderdetails ON orders.id = orderdetails.orderID )
         INNER JOIN products ON orderdetails.productID = products.id)
         INNER JOIN customers ON orders.customerID = customers.id
         WHERE orders.customerID = ${customerID}
         ORDER BY orders.orderDate DESC
        `;
        let result = await db.getDataFromSql(sql);
        return result;  
    };

    async getAllOrders(tableName) {
        let result = await db.readAll(tableName);
        return result;
    };

    async creatSqlData(orders, orderdetails) {
        let sql = `
        BEGIN;
        INSERT INTO orders (customerId, orderStatus, orderValue, deliveryId)
        VALUES (1, 1, 7600, 1);
        INSERT INTO orderdetails (orderID, customerID, productID, netPrice, orderQuantity)
        VALUES (LAST_INSERT_ID(), 1, 1, 7600, 1);
        COMMIT;
        `;
        let res = [];
        let result = await db.create(order, 'orders');
        /* let result2 = await db.create(orderDetail, 'orderdetails');
        return 
        */

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