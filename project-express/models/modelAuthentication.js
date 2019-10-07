const mariadb = require('mariadb');
const pool = mariadb.createPool({
    user: 'root',
    password: 'root',
    database: 'webshop' // database name
});

module.exports = class modelAuthentication {
    constructor() {
        pool.getConnection().then(conn => this.conn = conn);
    };

    /**
           * readAll and read method, get data from database
           * @param {string} table table name
           * @param {string} column column name
           * @param {string|number} value column value
           */

    async read(table, column, value) {
        let sql = `
    SELECT *
    FROM ${table}
    WHERE ${column} = '${value}'
    `;
        let result = await this.conn.query(sql);
        return result[0];
    };

    async update(object, table) {
        let objectToString = '';

        for (let key in object) {
            objectToString += `${key} = `;
            if (typeof object[key] === 'number') {
                objectToString += `${object[key]}, `;
            } else {
                objectToString += `'${object[key]}', `;
            }
        }
        objectToString = objectToString.slice(0, objectToString.length - 2);

        const sql = `
            UPDATE ${table} 
            SET
            ${objectToString}
            WHERE id=${object.id}
            `;
        const result = await this.conn.query(sql);
        return result;
    };

    /**
          * readByTwoParams
          * @param {string} table table name
          * @param {object} object
          */

    async readByTwoParams(table, object) {
        let sql = `
            SELECT * 
            FROM ${table} 
            WHERE username = '${object.username}' 
                AND password = '${object.password}'
        `;
        let result = await this.conn.query(sql);
        return result;
    };

}