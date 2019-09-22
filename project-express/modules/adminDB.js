const DB = require('./DB');

const db = new DB();

module.exports = class productDB {

    /**
           * getOneProduct and getAllProducts get data from database through db.js
           * @param {number} productId 
           */

    async getAllAdmins() {
        const result = await db.readAll('product');
        return result;
    };

    async getOneAdmin(id) {
        const result = await db.readOne('product', id);
        console.log(result);
        return result;
    };

    async createAdmin(object) {
        const result = await db.create('product', object);
        console.log(result);
        return result;
    };

    async updateAdmin(object) {
        const result = await db.update('product', object);
        console.log(result);
        return result;
    };

    async deleteAdmin(object) {
        const result = await db.delete('product', object);
        console.log(result);
        return result;
    };
}