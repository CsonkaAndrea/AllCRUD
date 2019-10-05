const sh1 = require('js-sha1');
const Models = require('../models/models');

const models = new Models();

module.exports = class adminsDB {
    get tableName() {
        return 'admins';
    };

    async getAllAdmins() {
        const result = await models.readAll(this.tableName);
        return result;
    };

    async getOneAdmin(id) {
        const result = await models.readOne(this.tableName, id);
        return result;
    };

    async createAdmin(object) {
        object.password = sha1(object.password);
        const result = await models.create(object, this.tableName);
        return result;
    };

    async updateAdmin(object) {
        object.password = sha1(object.password);
        const result = await models.update(object, this.tableName);
        return result;
    };

    async deleteAdmin(object) {
        const result = await models.delete(this.tableName, object);
        const result = await models.readOne(this.tableName, id);
        return result;
    };
}