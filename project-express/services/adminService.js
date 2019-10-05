const sh1 = require('js-sha1');
const Modules = require('../modules/modules');

const modules = new Modules();

module.exports = class adminsDB {
    //ez itt mi???

    get tableName() {
        return 'admins';
    };

    async getAllAdmins() {
        const result = await modules.readAll(this.tableName);
        return result;
    };

    async getOneAdmin(id) {
        const result = await modules.readOne(this.tableName, id);
        return result;
    };

    async createAdmin(object) {
        object.password = sha1(object.password);
        const result = await modules.create(object, this.tableName);
        return result;
    };

    async updateAdmin(object) {
        object.password = sha1(object.password);
        const result = await modules.update(object, this.tableName);
        return result;
    };

    async deleteAdmin(object) {
        const result = await modules.delete(this.tableName, object);
        const result = await modules.readOne(this.tableName, id);
        return result;
    };
}