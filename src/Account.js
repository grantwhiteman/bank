const getDate = require('../src/getDate.js')
module.exports = class Account {
    constructor(balance = 0) {
        this._balance = balance
        this._transactions = []
        this._statement = 'date || credit || debit || balance'
    }

    deposit(amount, date = getDate()) {
        this._balance += amount
        this._transactions.unshift([date, amount.toFixed(2), null, this._balance.toFixed(2)])
    }

    withdraw(amount, date = getDate()) {
        this._balance -= amount
        this._transactions.unshift([date, null, amount.toFixed(2), this._balance.toFixed(2)])
    }

    printStatement() {
        console.log(this._transactions)
        for (let i = 0; i < this._transactions.length; i++) {
            this._statement += `\n${this._transactions[i].join(' || ').replace('  ', ' ')}`
        }
        return this._statement
    }
}