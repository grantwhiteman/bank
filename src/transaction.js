module.exports = class Transactions {
    deposit(amount, date, balance) {
        return [date, amount.toFixed(2), null, balance.toFixed(2)]
    }

    withdraw(amount, date, balance) {
        return [date, null, amount.toFixed(2), balance.toFixed(2)]
    }
}