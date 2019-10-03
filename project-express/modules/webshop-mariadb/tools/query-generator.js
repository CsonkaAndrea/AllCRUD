module.exports = class QueryGenerator {

  constructor() {
    this.queryString = '';
  }

  getQueryString(tableName, queryObject) {
    this._generateQueryString(tableName, queryObject);
    return this.queryString;
  }

  _generateQueryString(tableName, queryObject = {}) {
    this._clearPreviousQuery();
    this._setMainTable(tableName);
    this._setQuery(queryObject);
    this._setKeys(queryObject);
    this._setSelect();
    this._setFrom();
    this._setWhere();
    this._setGroupBy();
    this._setHaving();
    this._setOrderBy();
    this._setLimit();
    this._endQueryString();
  }

  _clearPreviousQuery() {
    this.queryString = '';
  }

  _setMainTable(tableName) {
    this.tableName = tableName;
  }

  _setQuery(queryObject) {
    this.query = queryObject;
  }

  _setKeys(queryObject) {
    this.whereKeys = Object.keys(queryObject);
    if (this.whereKeys.includes('select')) {
      this.whereKeys.splice(this.whereKeys.indexOf('select'), 1);
    }
    if (this.whereKeys.includes('from')) {
      this.whereKeys.splice(this.whereKeys.indexOf('from'), 1);
    }
    if (this.whereKeys.includes('groupBy')) {
      this.whereKeys.splice(this.whereKeys.indexOf('groupBy'), 1);
    }
    if (this.whereKeys.includes('having')) {
      this.whereKeys.splice(this.whereKeys.indexOf('having'), 1);
    }
    if (this.whereKeys.includes('orderBy')) {
      this.whereKeys.splice(this.whereKeys.indexOf('orderBy'), 1)
    }
    if (this.whereKeys.includes('limit')) {
      this.whereKeys.splice(this.whereKeys.indexOf('limit'), 1);
    }
    if (this.whereKeys.includes('betweenColumn')) {
      this.whereKeys.splice(this.whereKeys.indexOf('betweenColumn'), 1);
    }
    if (this.whereKeys.includes('betweenValues')) {
      this.whereKeys.splice(this.whereKeys.indexOf('betweenValues'), 1);
    }
  }

  _apostropheByType(value) {
    if (typeof value === 'string') {
      return `'${value}'`;
    } else {
      return value;
    }
  }

  _setSelect() {
    if (this.query.select) {
      this.queryString = this.queryString.concat(`SELECT ${this.query.select}`);
    } else {
      this.queryString = this.queryString.concat(`SELECT *`);
    }
  }

  _setFrom() {
    if (this.query.from) {
      this.queryString = this.queryString.concat(` FROM ${this.tableName} ${this.query.from}`);
    } else {
      this.queryString = this.queryString.concat(` FROM ${this.tableName}`);
    }
  }

  _setWhere() {
    if (this.whereKeys.length > 0) {
      this.whereKeys.forEach((key, index) => {
        if (index === 0) {
          this.queryString = this.queryString.concat(` WHERE`);
        }
        this.queryString = this.queryString.concat(`
          ${key} = ${this._apostropheByType(this.query[key])} AND `);
      });
      if (this.query.betweenColumn && this.query.betweenValues) {
        this.queryString = this.queryString.concat(` ${this.query.betweenColumn} BETWEEN ${this.query.betweenValues}`);
      } else {
        this.queryString = this.queryString.replace(/\sAND\s$/, '');
      }
    }
  }

  _setGroupBy() {
    if (this.query.groupBy) {
      this.queryString = this.queryString.concat(` GROUP BY
        ${this.query.groupBy}
      `);
    }
  }

  _setHaving() {
    if (this.query.having) {
      this.queryString = this.queryString.concat(` HAVING ${this.query.having}`);
    }
  }

  _setOrderBy() {
    if (this.query.orderBy) {
      this.queryString = this.queryString.concat(` ORDER BY ${this.query.orderBy}`);
    }
  }

  _setLimit() {
    if (this.query.limit) {
      this.queryString = this.queryString.concat(` LIMIT ${this.query.limit}`)
    }
  }

  _endQueryString() {
    this.queryString = this.queryString.concat(';');
  }

}
