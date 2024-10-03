export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;

    this._validateCode(code);
    this._validateName(name);
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(value) {
    this._validateCode(value);
    this._code = value;
  }

  set name(value) {
    this._validateName(value);
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  _validateCode(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
  }

  _validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }
}
