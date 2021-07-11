const formatDate = require('./getDate.js')
const Statement = require('./statement.js')

module.exports = class Account {
    constructor() {
        this._balance = 0
        this._transactions = []
        this._statement = new Statement
    }

    deposit(transaction, amount, date = formatDate()) {
        this._balance += amount
        this._transactions.unshift(transaction.deposit(amount, date, this._balance))
    }

    withdraw(transaction, amount, date = formatDate()) {
        this._balance -= amount
        this._transactions.unshift(transaction.withdraw(amount, date, this._balance))
    }

    printStatement() {
        return this._statement.print(this._transactions)
    }
}