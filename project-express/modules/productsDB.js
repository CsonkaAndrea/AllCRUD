  const DB = require('./DB');
  const db = new DB();

  module.exports = class productsDB {

      /**
       * getOneProduct and getAllProducts get data from database through db.js
       * @param {number} id 
       */

      async getAllProducts() {
          const result = await db.readAll('products');
          return result;
      };

      async getOneProduct(id) {
          const result = await db.readOne('products', id);
          console.log(result);
          return result;
      };

      async createProduct(object) {
          const result = await db.create('products', object);
          console.log(result);
          return result;
      }

  }