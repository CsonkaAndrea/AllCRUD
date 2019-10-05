const Models = require('../models/models');
const models = new Models();

module.exports = class orderDB {
    get tableName() {
        return 'orders';
    };

    async getAllOrders(tableName) {
        let result = await models.readAll(this.tableName);
        return result;
    };

    async getAllOrders() {
        const result = await models.readAll(this.tableName);
        return result;
    };

    async getOneOrder(id) {
        const result = await models.readOne(this.tableName, id);
        return result;
    };

    async createOrder(object) {
        const result = await models.create(this.tableName, object);
        return result;
    };

    async updateOrder(object) {
        const result = await models.update(object, this.tableName);
        return result;
    };

    async deleteOrder(object) {
        const result = await models.delete(this.tableName, object);
        return result;
    };
}