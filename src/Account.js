const getDate = require('../src/getDate.js')
class Account {
    constructor() {
        this._transactions = []
    }

    deposit(amount, date = getDate()) {
        this._transactions.push(['deposit', amount, date])
    }
}
module.exports = Account