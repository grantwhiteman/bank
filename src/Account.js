class Account {
    constructor() {
        this._transactions = []
    }

    deposit(amount, date = new Date().toISOString().slice(0,10)) {
        this._transactions.push(['deposit', amount, date])
    }
}
module.exports = Account