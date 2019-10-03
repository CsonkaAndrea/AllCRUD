module.exports = class SetGenerator {

  constructor() {
    this.setString = '';
  }

  /**
   * Gets a MySQL compatible query string.
   * @param {req.body} data An object representing the data to be changed
   * @returns {string} A MySQL compatible SET string "field1 = value1, field2 = value2"
   */
  getSetString(data) {
    this._generateSetString(data);
    return this.setString;
  }

  _generateSetString(data) {
    this._emptyString();
    Object.keys(data).forEach((key, index) => {
      if (key !== 'id' && key !== 'insdate') {
        this.setString = this.setString.concat(`${key}=${this._apostropheByType(data[key])}`);
        this.setString = this.setString.concat(', ');
      }
    });
    this.setString = this.setString.replace(/,\s$/, '');
  }

  _emptyString() {
    this.setString = '';
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
