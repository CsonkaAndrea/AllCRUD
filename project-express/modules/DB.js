const mariadb = require('mariadb');
const pool = mariadb.createPool({
    user: 'root',
    password: 'root',
    database: 'webshop', // Ez az adatbázisunk neve
    connectionLimit: 5
});

module.exports = class DB {
    constructor() {
        pool.getConnection().then(conn => this.conn = conn);
    };


    /**
     * readAll and read method, get data from database
     * @param {string} table table name
     * @param {number} id 
     */

    async readOne(table, id) {
        const sql = `
      SELECT * 
      FROM ${table}
      WHERE id=${id}
      `;
        const result = await this.conn.query(sql);

        return result[0];
    }

    async readAll(table) {
        const sql = `
             SELECT * 
             FROM ${table}
             `;
        const result = await this.conn.query(sql);
        return result;
    };


    async create(object, table) {
        let columnNames = '';
        let rowValues = '';

        for (let key in object) {
            columnNames += `${key}, `;
            if (typeof object[key] === 'number') {
                rowValues += `${object[key]}, `;
            } else {
                rowValues += `'${object[key]}', `;
            }
        }
        columnNames = columnNames.slice(0, columnNames.length - 2);
        rowValues = rowValues.slice(0, rowValues.length - 2);

        const sql = `
INSERT INTO ${table} 
(${columnNames})
VALUES
(${rowValues})
`
        const result = await this.conn.query(sql);
        return result;
    }

    update() {};

    delete() {};


};