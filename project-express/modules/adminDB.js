const DB = require('./DB');
const db = new DB();
module.exports = class adminsDB {
    get tableName() {
        return 'admins';
    };

    async getAllAdmins() {
        const result = await db.readAll(this.tableName);
        return result;
    };

    async getOneAdmin(id) {
        const result = await db.readOne(this.tableName, id);
        return result;
    };

    async createAdmin(object) {
        const result = await db.create(object, this.tableName);
        return result;
    };

    async updateAdmin(object) {
        const result = await db.update(object, this.tableName);
        return result;
    };

    async deleteAdmin(object) {
        const result = await db.delete(this.tableName, object);
        return result;
    };
}