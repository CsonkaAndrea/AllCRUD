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


    async createRestful() {
        const getAllProductNames = await db.readRestful('product', 'productName');
        console.log(`createRest ${getAllProductNames}`);
        const result = getAllProductNames.map(p => p.productName = (p.productName.toLowerCase().replace(/ | - |[/]|[.]|[,]/g, '-').replace(/---|--/g, '-')));

        return result;
    }
}