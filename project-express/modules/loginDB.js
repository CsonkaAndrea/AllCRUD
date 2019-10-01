const sha1 = require('js-sha1');
const DB = require('./DB');

const db = new DB();

module.exports = class loginDB {

    async getLoginDataAdmin() {
        const result = await db.login('admin', object);
        console.log(result);
        return result;
    };

    async loginUser(object) {
        let users = await db.readLogin('customers', object);
        let userId = -1;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === object.email && users[i].password === sha1(object.password)) {
                userId = users[i].id;
                break;
            }
        }
        if (userId > 0) {
            object.token = await this.createToken();
            console.log(`ifes object.token: ${object.token}`);
            const tableId = await db.updateTable(userId, object.token, 'customers', 'token');
            return object.token;
        }

    };

    async createToken() {
        let result = ''
        for (let i = 0; i < 50; i++) {
            let index = Math.round(Math.random() * 50 + 65);
            result += String.fromCharCode(index);
        }
        return result;
    };

    async checkLogin(req) {
        if (!req.cookies.uuid) {
            return false;
        }
        result = await db.read('customers', 'token', req.cookies.uuid);
        return result;
    }

}


