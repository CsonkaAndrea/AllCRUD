const DB = require('./DB');

const db = new DB();

module.exports = class orderDB {


    async getAllOrders() {
        const result = await db.readAll('orders');
        return result;
    };


    async getOneOrder(id) {
        const result = await db.readOne('order', id);
        return result;
    };


    async createOrder(object) {
        const result = await db.create('order', object);
        return result;
    };


    async updateOrder(object) {
        const result = await db.update('order', object);
        return result;
    };


    async deleteOrder(object) {
        const result = await db.delete('order', object);
        return result;
    };
}
