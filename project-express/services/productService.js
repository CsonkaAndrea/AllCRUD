const Modules = require('../modules/modules');

const modules = new Modules();

module.exports = class productDB {
    async getAllProducts() {
        const result = await modules.readAll('products');
        return result;
    };

    async getOneProduct(id) {
        const result = await modules.readOne('products', id);
        return result;
    };

    async getOneProductSeo(seoFriendlyName) {
        const result = await modules.readOneSeo('products', seoFriendlyName);
        return result;
    };

    async createProduct(object) {
        const result = await modules.create(object, 'products');
        return result;
    };

    async updateProduct(object) {
        const result = await modules.update(object, 'products');
        return result;
    };

    async deleteProduct(object) {
        const result = await modules.delete('products', object);
        return result;
    };

    async createRestful() {
        const getAllProductNames = await modules.readRestful('products', 'productName');
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
        const result = await modules.showAsc('products', 'productName');
        return result;
    };

    async showDescProduct() {
        const result = await modules.showDesc('products', 'productName');
        return result;
    };
}