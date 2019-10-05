const DB = require('../modules/DB');

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
        return result;
    };

    async updateProduct(object) {
        const result = await db.update(object, 'products');
        return result;
    };

    async deleteProduct(object) {
        const result = await db.delete('products', object);
        return result;
    };

    async createRestful() {
        const getAllProductNames = await db.readRestful('products', 'productName');
        const result = getAllProductNames.map(p => p.productName = (p.productName.toLowerCase().replace(/ | - |[/]|[.]|[,]/g, '-').replace(/---|--/g, '-')));
        return result;
    };

    async restfulEndPoint() {
        const sql = `
        SELECT productName
        FROM product
        `;
        const result = await this.conn.query(sql);
        return result;
    };

    async showAscProduct() {
        const result = await db.showAsc('products', 'productName');
        return result;
    };

    async showDescProduct() {
        const result = await db.showDesc('products', 'productName');
        return result;
    };
}