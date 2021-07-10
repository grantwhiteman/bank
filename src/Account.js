const getDate = require('../src/getDate.js')
module.exports = class Account {
    constructor() {
        this._transactions = []
    }

    deposit(amount, date = getDate()) {
        this._transactions.push(['deposit', amount, date])
    }

    withdraw(amount, date = getDate()) {
        this._transactions.push(['withdrawal', amount, date])
    }
}