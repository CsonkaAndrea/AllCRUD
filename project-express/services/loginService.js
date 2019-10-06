const sha1 = require('js-sha1');
const Models = require('../models/models');

const models = new Models();

module.exports = class loginService {
    async loginUser(string, object, whereColumn, andColumn) {
    object.password = sha1(object.password);
    const users = await models.readByTwoParams(string, object, whereColumn, andColumn);
    return users[0].id || -1;
    };

    async createToken(string, userId) {
        let token = '';
        for (let i = 0; i < 50; i++) {
            const index = Math.round(Math.random() * 50 + 65);
            token += String.fromCharCode(index);
        }
        const tableId = await models.updateTable(userId, token, string, 'token');
        return token;
    };

    async checkLogin(object) {
        if (!object) {
            return false;
        }
        const loggedInUser = await models.read('customers', 'token', object);
        return loggedInUser;
    };
}



