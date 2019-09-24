const DB = require('./DB');
const db = new DB();

module.exports = class usersDB {

    async getAllUsers() {
        const result = await db.readAll('customers');
        return result;
    };

    async getOneUser(id) {
        const result = await db.readOne('customers', id);
        return result;
    };

    async deleteUser(id) {
        const result = await db.delete('customers', id);
        return result;
    };

    async updateUser(object) {
        const result = await db.update(object, 'customers');
        return result;
    };

    async createUser(object) {
        const result = await db.create(object, 'customers');
        return result;
    };


}