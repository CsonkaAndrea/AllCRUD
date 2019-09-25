const DB = require('./DB');

const db = new DB();

module.exports = class adminDB {

    async getLoginDataAdmin() {
        const result = await db.login('admin', object);
        console.log(result);
        return result;
    };

    async getLoginDataUser() {
        const result = await db.login('customers', object);
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

}
