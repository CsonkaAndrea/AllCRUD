const sha1 = require('js-sha1');
const DB = require('./DB');

const db = new DB();

module.exports = class registerDB {
    async registerAdmins(object) {
        object.password = sha1(object.password);
        const result = await db.create(object, 'admins');
        return result;
    };

    async registerUsers(object) {
        object.password = sha1(object.password);
        const customerId = await db.create(object, 'customers');
        const tableId = await db.createTable(customerId, 'baskets', 'customerID');
        return tableId;
    };
}