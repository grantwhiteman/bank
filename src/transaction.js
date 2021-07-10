const getDate = require('./getDate.js')
module.exports = class Transactions {
    constructor() {
        this._transaction = []
    }

    deposit(amount, date) {
        return this._transaction = [date, amount.toFixed(2), null]
    }

    withdraw(amount, date) {
        return this._transaction = [date, null, amount.toFixed(2)]
    }

}