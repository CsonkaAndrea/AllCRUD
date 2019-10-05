const Models = require('../models/models');

const models = new Models();

module.exports = class productDB {
    async getAllProducts() {
        const result = await models.readAll('products');
        return result;
    };

    async getOneProduct(id) {
        const result = await models.readOne('products', id);
        return result;
    };

    async getOneProductSeo(seoFriendlyName) {
        const result = await models.readOneSeo('products', seoFriendlyName);
        return result;
    };

    async createProduct(object) {
        const result = await models.create(object, 'products');
        return result;
    };

    async updateProduct(object) {
        const result = await models.update(object, 'products');
        return result;
    };

    async deleteProduct(object) {
        const result = await models.delete('products', object);
        return result;
    };

    async createRestful() {
        const getAllProductNames = await models.readRestful('products', 'productName');
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
        const result = await models.showAsc('products', 'productName');
        return result;
    };

    async showDescProduct() {
        const result = await models.showDesc('products', 'productName');
        return result;
    };
}