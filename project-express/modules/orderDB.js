const DB = require('./DB');
const db = new DB();

module.exports = class orderDB {

    async getAllOrders(tableName) {
        let result = await db.readAll(tableName);
        return result;
    };

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