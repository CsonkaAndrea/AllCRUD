const Modules = require('../modules/modules');
const modules = new Modules();

module.exports = class orderDB {
    get tableName() {
        return 'orders';
    };

    async getAllOrders(tableName) {
        let result = await modules.readAll(this.tableName);
        return result;
    };

    async getAllOrders() {
        const result = await modules.readAll(this.tableName);
        return result;
    };

    async getOneOrder(id) {
        const result = await modules.readOne(this.tableName, id);
        return result;
    };

    async createOrder(object) {
        const result = await modules.create(this.tableName, object);
        return result;
    };

    async updateOrder(object) {
        const result = await modules.update(object, this.tableName);
        return result;
    };

    async deleteOrder(object) {
        const result = await modules.delete(this.tableName, object);
        return result;
    };
}