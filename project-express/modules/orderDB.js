const DB = require('./DB');

const db = new DB();

module.exports = class productDB {

    /**
           * getOneProduct and getAllProducts get data from database through db.js
           * @param {number} productId 
           */

    async getAllOrders() {
        const result = await db.readAll('order');
        return result;
    };

    async getOneOrder(id) {
        const result = await db.readOne('order', id);
        console.log(result);
        return result;
    };

    async createOrder(object) {
        const result = await db.create('order', object);
        console.log(result);
        return result;
    };

    async updateOrder(object) {
        const result = await db.update('order', object);
        console.log(result);
        return result;
    };

    async deleteOrder(object) {
        const result = await db.delete('order', object);
        console.log(result);
        return result;
    };
}