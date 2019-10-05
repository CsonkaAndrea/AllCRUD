const sha1 = require('js-sha1');
const Models = require('../models/models');

const models = new Models();

module.exports = class loginDB {
    async loginUser(string, object) {
        let users = await models.readLogin(string, object);
        let userId = -1;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === object.email && users[i].password === sha1(object.password)) {
                userId = users[i].id;
                break;
            }
        }
        return userId;
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



