const getDate = require('./getDate.js')
const Transactions = require('./transaction.js')

module.exports = class Account {
    constructor(balance = 0) {
        this._balance = balance
        this._transactions = []
        this._statement = 'date || credit || debit || balance'
    }

    deposit(transaction, amount, date = getDate()) {
        this._balance += amount
        let arr = transaction.deposit(amount, date)
        arr.push(this._balance.toFixed(2))
        this._transactions.unshift(arr)
    }

    withdraw(transaction, amount, date = getDate()) {
        this._balance -= amount
        let arr = transaction.withdraw(amount, date)
        arr.push(this._balance.toFixed(2))
        this._transactions.unshift(arr)
    }

    printStatement() {
        for (let i = 0; i < this._transactions.length; i++) {
            this._statement += `\n${this._transactions[i].join(' || ').replace('  ', ' ')}` // had to replace double space with single as null had 2 spaces
        }
        return this._statement
    }
}