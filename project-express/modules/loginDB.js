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
        let decideIfAlreadyRegistered = -1;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === object.email && users[i].password === sha1(object.password)) {
                decideIfAlreadyRegistered = users[i].id;
                break;
            }
        }
        console.log(decideIfAlreadyRegistered);
        return decideIfAlreadyRegistered;
    };


    async setAdminToken() {
        const result = await db.setToken('admin', object);
        console.log(result);
        return result;
    };

    async setUserToken() {
        const result = await db.setToken('customers', object);
        console.log(result);
        return result;
    };

    //nem jó!!!!

    async createTokenAdmin() {
        let result = '';
        for (let i = 0; i < 20; i++) {
            let index = Math.round(Math.random() * 50 + 65);
            result += String.fromCharCode(index);
        }
        const admin = await this.getOneAdmin(id);
        admin.token = result;
        await this.updateAdmin(object);
        console.log(token);
        return token;
    };

}


