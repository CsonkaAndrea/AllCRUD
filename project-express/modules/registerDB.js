const sha1 = require('js-sha1');
const DB = require('./DB');
const db = new DB();

module.exports = class registerDB {

    async registerAdmins(object) {
        object.password = sha1(object.password);
        console.log(object);
        const result = await db.create(object, 'admins');
        return result;
    };


    async registerUsers(object) {
        object.password = sha1(object.password);
        console.log(`pw: ${object.password}`);

        const customerId = await db.create(object, 'customers');
        console.log(`custormerID: ${customerId}`);

        const tableId = await db.createTable(customerId, 'baskets', 'customerID');
        console.log(`tableId: ${tableId}`);

        return tableId;
    };
}