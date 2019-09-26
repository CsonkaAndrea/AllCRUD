const DB = require('./DB');

const db = new DB();

module.exports = class adminDB {

    async getLoginDataAdmin() {
        const result = await db.login('admin', object);
        console.log(result);
        return result;
    };

    async getLoginDataUser() {
        const result = await db.readLogin('customers', object);
        console.log(result);
        return result;
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
