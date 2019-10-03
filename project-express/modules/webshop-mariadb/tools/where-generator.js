module.exports = class WhereGenerator {

  constructor() {
    this.whereString = '';
  }

  /**
   * Generates a MySQL WHERE syntax based on the url query string.
   * @param {req.query} queryObject request query object from the request url.
   * @returns {string} A MySQL compatible "WHERE cond1=val1 AND cond2=val2" string.
   */
  getWhereString(queryObject) {
    this._emptyPreviousQuery();
    this._setQuery(queryObject);
    this._setQueryKeys();
    this._generateWhereString();
    if (this.queryKeys.length === 0) {
      return '';
    }
    return this.whereString;
  }

  _generateWhereString() {
    this.queryKeys.forEach((key, index) => {
      if (index !== 0) {
        this.whereString = this.whereString
          .concat(' AND ');
      }
      if (key === 'password' || key === 'username') {
        this.whereString = this.whereString
          .concat(`${key} = SHA1(${this._apostropheByType(this.query[key])})`);
      } else {
        this.whereString = this.whereString
          .concat(`${key} = ${this._apostropheByType(this.query[key])}`);
      }
    });
  }

  _emptyPreviousQuery() {
    this.whereString = ' WHERE ';
  }

  _setQuery(queryObject) {
    this.query = queryObject;
  }

  _setQueryKeys() {
    this.queryKeys = Object.keys(this.query);
  }

  _apostropheByType(value) {
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    if (typeof value === 'number') {
      return `${value}`;
    }
  }

};
