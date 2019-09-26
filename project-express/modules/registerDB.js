const sha1 = require('js-sha1');
const DB = require('./DB');
const db = new DB();

module.exports = class adminDB {

    async getAllAdmins() {
        const result = await db.readAll('admin');
        return result;
    };


    async getOneAdmin(id) {
        const result = await db.readOne('admins', id);
        console.log(result);
        return result;
    };


    async createAdmin(object) {
        const result = await db.create('admins', object);
        console.log(result);
        return result;
    };


    async updateAdmin(object) {
        const result = await db.update('admins', object);
        console.log(result);
        return result;
    };


    async deleteAdmin(object) {
        const result = await db.delete('admins', object);
        console.log(result);
        return result;
    };

    async registerAdmins(object) {
        object.password = sha1(object.password);
        console.log(object);
        const result = await db.create(object, 'admins');
        return result;
    };

    async registerUsers(object) {
        object.password = sha1(object.password);
        console.log(object);
        const result = await db.create(object, 'customers');
        return result;
    };

}