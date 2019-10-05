const Modules = require('../modules/modules');

const modules = new Modules();

module.exports = class usersDB {
    async getAllUsers() {
        const result = await modules.readAll('customers');
        return result;
    };

    async getOneUser(id) {
        const result = await modules.readOne('customers', id);
        return result;
    };

    async deleteUser(id) {
        const result = await modules.delete('customers', id);
        return result;
    };

    async updateUser(object) {
        const result = await modules.update(object, 'customers');
        return result;
    };

    async createUser(object) {
        const result = await modules.create(object, 'customers');
        return result;
    };
}