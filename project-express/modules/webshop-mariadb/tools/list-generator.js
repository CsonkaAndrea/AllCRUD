module.exports = class ListGenerator {

  constructor() {
    this.list = '';
  }

  /**
   * Generates a list of the given objects keys
   * @param {Object} data An object representation of the record you want to create.
   * @returns {string} A MySQL list of the field names 
   */
  getFieldNames(data) {
    this._generateFieldNames(data);
    console.log(this.list);
    return this.list;
  }

  /**
   * Generates a list of the given objects properties
   * @param {Object} data An object representation of the record you want to create.
   * @returns {string} A MySQL lst of the field values 
   */
  getFieldValues(data) {
    this._generateFieldValues(data);
    console.log(this.list);
    return this.list;
  }

  _generateFieldNames(data) {
    this._emptyList();
    this._initData(data);
    this.dataKeys.forEach((key) => {
      if (key !== 'id' && key !== 'insdate') {
        if (this.list !== '') {
          this.list = this.list.concat(', ');
        }
        this.list = this.list.concat(key);
      }
    });
  }

  _generateFieldValues(data) {
    this._emptyList();
    this._initData(data);
    this.dataKeys.forEach((key) => {
      if (key === 'id' || key === 'insdate') {
        return;
      }
      if (key === 'username' || key === 'password') {
        if (this.list !== '') {
          this.list = this.list.concat(', ');
        }
        this.list = this.list.concat(`SHA1(${this._apostropheByType(key)})`);
      } else {
        if (this.list !== '') {
          this.list = this.list.concat(', ');
        }
        this.list = this.list.concat(this._apostropheByType(key));
      }
    });
  }

  _initData(data) {
    this.data = data;
    this.dataKeys = Object.keys(data);
  }

  _emptyList() {
    this.list = '';
  }

  _apostropheByType(key) {
    if (typeof this.data[key] === 'string') {
      return `'${this.data[key]}'`;
    }
    if (typeof this.data[key] === 'number') {
      return `${this.data[key]}`;
    }
  }

}