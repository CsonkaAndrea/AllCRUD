const sha1 = require('js-sha1');
const Modules = require('../modules/Modules');

const modules = new Modules();

module.exports = class registerDB {
    async registerAdmins(object) {
        object.password = sha1(object.password);
        const result = await modules.create(object, 'admins');
        return result;
    };

    async registerUsers(object) {
        object.password = sha1(object.password);
        const customerId = await modules.create(object, 'customers');
        const tableId = await modules.createTable(customerId, 'baskets', 'customerID');
        return tableId;
    };
}