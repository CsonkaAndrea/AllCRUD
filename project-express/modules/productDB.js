const mariadb = require('mariadb');
const pool = mariadb.createPool({
    user: 'root',
    password: 'root',
    database: 'webshop', // Ez az adatbázisunk neve
    connectionLimit: 5
});

const DB = require('./DB');

const db = new DB();

module.exports = class productDB {
    constructor() {
        pool.getConnection().then(conn => this.conn = conn);
    };

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
    };


    async updateProduct(object) {
        const result = await db.update('product', object);
        console.log(result);
        return result;
    };


    async deleteProduct(object) {
        const result = await db.delete('product', object);
        console.log(result);
        return result;
    };

    async restfulEndPoint() {
        const sql = `
        SELECT productName
        FROM product
        `;
        const result = await this.conn.query(sql);
        console.log(result);
        return result;

    }
}