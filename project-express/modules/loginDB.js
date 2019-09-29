const sha1 = require('js-sha1');
const DB = require('./DB');

const db = new DB();

module.exports = class loginDB {

    async getLoginDataAdmin() {
        const result = await db.login('admin', object);
        console.log(result);
        return result;
    };




}
