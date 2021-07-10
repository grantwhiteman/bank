const getDate = require('./getDate.js')
module.exports = class Transactions {
    constructor() {
        this._transaction = []
    }

    deposit(amount, date, balance) {
        return this._transaction = [date, amount.toFixed(2), null, balance.toFixed(2)]
    }

    withdraw(amount, date, balance) {
        return this._transaction = [date, null, amount.toFixed(2), balance.toFixed(2)]
    }

}