const DB = require('./DB');

const db = new DB();

module.exports = class productDB {

    /**
           * getOneProduct and getAllProducts get data from database through db.js
           * @param {number} productId 
           */

    async getAllProducts() {
        const result = await db.readAll('product');
        return result;
    };

    async getOneProduct(id) {
        const result = await db.readOne('product', id);
        console.log(result);
        return result;
    };

    async createProduct(object) {
        const result = await db.create('product', object);
        console.log(result);
        return result;
    }

}