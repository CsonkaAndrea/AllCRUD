const sha1 = require('js-sha1');
const ModelAuthentication = require('../models/modelAuthentication');

const modelAuthentication = new ModelAuthentication();

module.exports = class loginService {
    async loginUser(string, object) {
        object.password = sha1(object.password);
        const users = await modelAuthentication.readByTwoParams(string, object);
        return users[0].id || -1;
    };

    async createToken(string, userId) {
        let token = '';
        for (let i = 0; i < 50; i++) {
            const index = Math.round(Math.random() * 50 + 65);
            token += String.fromCharCode(index);
        }
        const tableId = await modelAuthentication.update({ id: userId, token: token }, string);
        return token;
    };

    async checkLogin(object) {
        if (!object) {
            return false;
        }
        const loggedInUser = await modelAuthentication.read('customers', 'token', object);
        return loggedInUser;
    };
}



