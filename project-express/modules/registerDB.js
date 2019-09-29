const sha1 = require('js-sha1');
const DB = require('./DB');
const db = new DB();

module.exports = class adminDB {

    async registerAdmins(object) {
        object.password = sha1(object.password);
        console.log(object);
        const result = await db.create(object, 'admins');
        return result;
    };

    async registerUsers(object) {
        object.password = sha1(object.password);
        const result = await db.create(object, 'customers');
        // ide jön majd a kosárkreáló meghívása
        console.log(`registerdbs: ${result}`);
        return result;
    };

}