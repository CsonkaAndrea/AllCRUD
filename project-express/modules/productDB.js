const DB = require('./DB');
const db = new DB();

module.exports = class productDB {
    async getAllProducts() {
        const result = await db.readAll('products');
        return result;
    };

    async getOneProduct(id) {
        const result = await db.readOne('products', id);
        return result;
    };

    async getOneProductSeo(seoFriendlyName) {
        const result = await db.readOneSeo('products', seoFriendlyName);
        return result;
    };


    async createProduct(object) {
        const result = await db.create(object, 'products');
        console.log(result);
        return result;
    };


    async updateProduct(object) {
        const result = await db.update(object, 'products');
        console.log(result);
        return result;
    };


    async deleteProduct(object) {
        const result = await db.delete('products', object);
        console.log(result);
        return result;
    };


    async createRestful() {
        const getAllProductNames = await db.readRestful('products', 'productName');
        console.log(`createRest ${getAllProductNames}`);
        const result = getAllProductNames.map(p => p.productName = (p.productName.toLowerCase().replace(/ | - |[/]|[.]|[,]/g, '-').replace(/---|--/g, '-')));
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

    };

    async showAscProduct() {
        const result = await db.showAsc('product', 'productName');
        console.log(result);
        return result;
    };

    async showDescProduct() {
        const result = await db.showDesc('product', 'productName');
        console.log(result);
        return result;
    };
}