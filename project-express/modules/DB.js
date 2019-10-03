const mariadb = require('mariadb');
const pool = mariadb.createPool({
    user: 'root',
    password: 'root',
    database: 'webshop' // Ez az adatbázisunk neve
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
    async readAll(table) {
        const sql = `
             SELECT * 
             FROM ${table}
             `;
        const result = await this.conn.query(sql);
        return result;
    };

    async readOne(table, id) {
        const sql = `
             SELECT * 
             FROM ${table}
             WHERE id=${id}
             `;
        const result = await this.conn.query(sql);
        console.log(`readAll ${result}`);
        return result[0];
    };

    async readOneSeo(table, seoFriendlyName) {
        const sql = `
             SELECT * 
             FROM ${table}
             WHERE seoFriendlyProductName='${seoFriendlyName}'
             `;
        const result = await this.conn.query(sql);
        return result[0];
    };

    /**
     * Create method for database
     * @param {string}  table table name
     * @param {object} object object from req.body, keys are the column names of the table, rows are the values
     */

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
            `;
        const result = await this.conn.query(sql);
        console.log(`insertid: ${result.insertId}`);
        return result.insertId;
    };


    /**
     * update method for database
     * @param {string}  table table name
     * @param {object} object req.body, keys are the column names of the table, rows are the values
     */

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
     * Create method for database
     * @param {string}  table table name
     * @param {object} object object from req.body, keys are the column names of the table, rows are the values
     */

    async delete(table, object) {
        let sql = '';
        console.log(sql);
        if (object.id) {
            sql = `
                DELETE FROM ${table}
                WHERE id = ${object.id}
            `;
        } else {
            sql = `
                DELETE FROM ${table}
                WHERE productID = ${object.productID}
                `;
        };
        console.log(sql);
        const result = await this.conn.query(sql);
        return result;
    };

    /**
     * read data from SQL for restful end
     * @param {string} table name of the table
     * @param {number} object name of the column
     */

    async readRestful(table, object) {
        const sql = `
        SELECT ${object}
        FROM ${table}
        `;
        const result = await this.conn.query(sql);
        return result;
    };

    /**
     * write data in SQL for restful end
     * @param {string} table name of the table
     * @param {number} object name of the column
     * UNDER CONSTRUCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     */

    async writeRestful() {
        const sql = `
        UPDATE
        SET
        WHERE
        `;
        const result = await this.conn.query(sql);
        return result;
    };

    // async getDataFromSql(sql) {
    //     const result = await this.conn.query(sql);
    //     return result;
    // };

    async getSqlData(customerID){
        console.log(`customerid: ${customerID}`);
        let sql = `
        SELECT orders.id as orderID,
        orders.orderDate,
        orders.orderStatus,
        products.productName,
        orderdetails.orderQuantity,
        orderdetails.netPrice
        FROM (orders INNER JOIN orderdetails 
        ON orders.id = orderdetails.orderID)
        INNER JOIN products
        ON orderdetails.productID = products.id
        wHERE orders.customerId=${customerID}
        `;
        const result = await this.conn.query(sql);
        console.log(`result: ${result}`);
        return result;
    }

    async submittedBasketData(customerID) {
        // UNDER CONSTRUCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        let sql = `
        SELECT *
        FROM basketdetails
        INNER JOIN baskets
        ON baskets.id=basketdetails.basketID
        WHERE baskets.customerId=${customerID}; 
        ` ;
        const submittedBasket = await this.conn.query(sql);
        console.log(`result: ${submittedBasket}`);
        
        let orderSql = `
        INSERT INTO orders (customerId, orderStatus, orderValue, deliveryId)
        VALUES (${submittedBasket.customerId}, 1, 7600, 1);
        `;
        let result = await this.conn.query(orderSql);
        
       /*         BEGIN;
        INSERT INTO orders (customerId, orderStatus, orderValue, deliveryId)
        VALUES (1, 1, 7600, 1);
        INSERT INTO orderdetails (orderID, customerID, productID, netPrice, orderQuantity)
        VALUES (LAST_INSERT_ID(), 1, 1, 7600, 1);
        COMMIT; */

    }

    async readLogin(table, object) {
        let sql = `
            SELECT * 
            FROM ${table} 
            WHERE username = '${object.username}' 
                AND password = SHA1('${object.password}')
        `;
        let result = await this.conn.query(sql);
        return result;
    };

    async createTable(table) {
        let sql = `
        CREATE TABLE ${table}
            id INT NOT NULL AUTO_INCREMENT,
            customerId INT NOT NULL,
            PRIMARY KEY (id)
        `;
        let result = await this.conn.query(sql);
        return result;
    };

    async setToken(table, object) {
        let sql = `
            UPDATE ${table}
            SET token = '${object.token}' 
            WHERE id = ${object.id}
        `;
        let result = await this.conn.query(sql);
        return true;
    };

    //nincs megcsinálva

    async read(table, column, value) {
        let sql = `
    SELECT *
    FROM ${table}
    WHERE ${column} = '${value}'
    `;
        let result = await this.conn.query(sql);
        return result[0];
    };

};