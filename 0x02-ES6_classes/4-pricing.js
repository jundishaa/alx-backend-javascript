import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
    this._validateAmount(amount);
    this._validateCurrency(currency);
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    this._validateAmount(value);
    this._amount = value;
  }

  set currency(value) {
    this._validateCurrency(value);
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  _validateAmount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
  }

  _validateCurrency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }
}
