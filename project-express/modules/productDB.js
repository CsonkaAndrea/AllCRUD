const DB = require('./DB');

const db = new DB();

module.exports = class productDB {

    /**
           * getOneProduct and getAllProducts get data from database through db.js
           * @param {number} productId 
           */
    /*
        async getOneProduct(productId) {
            const result = await db.readOne('product', productId);
            return result;
        }
    */
    async getAllProducts() {
        const result = await db.readAll('product');
        return result;
    };

    async getOneProduct(id) {
        const result = await db.readOne('product', id);
        console.log(result);
        return result;
    }

}