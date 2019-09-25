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

}