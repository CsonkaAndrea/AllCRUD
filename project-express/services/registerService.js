const sha1 = require('js-sha1');
const Models = require('../models/models');

const models = new Models();

module.exports = class registerDB {
    async registerAdmins(object) {
        object.password = sha1(object.password);
        const result = await models.create(object, 'admins');
        return result;
    };

    async registerUsers(object) {
        object.password = sha1(object.password);
        const customerId = await models.create(object, 'customers');
        const tableId = await models.createTable(customerId, 'baskets', 'customerID');
        return tableId;
    };
}