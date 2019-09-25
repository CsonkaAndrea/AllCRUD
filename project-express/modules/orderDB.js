const DB = require('./DB');

const db = new DB();

module.exports = class orderDB {


    async getAllOrders() {
        const result = await db.readAll('orders');
        return result;
    };


    async getOneOrder(id) {
        const result = await db.readOne('orders', id);
        return result;
    };


    async createOrder(object) {
        const result = await db.create('orders', object);
        return result;
    };


    async updateOrder(object) {
        const result = await db.update(object, 'orders');
        return result;
    };


    async deleteOrder(object) {
        const result = await db.delete('orders', object);
        return result;
    };
}
