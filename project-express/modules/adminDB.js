const DB = require('./DB');

const db = new DB();

module.exports = class productDB {

    async getAllAdmins() {
        const result = await db.readAll('admin');
        return result;
    };


    async getOneAdmin(id) {
        const result = await db.readOne('admin', id);
        console.log(result);
        return result;
    };


    async createAdmin(object) {
        const result = await db.create('admin', object);
        console.log(result);
        return result;
    };


    async updateAdmin(object) {
        const result = await db.update('admin', object);
        console.log(result);
        return result;
    };


    async deleteAdmin(object) {
        const result = await db.delete('admin', object);
        console.log(result);
        return result;
    };
}