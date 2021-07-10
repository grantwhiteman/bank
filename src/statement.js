module.exports = class Statement {
    constructor() {
        this._statement = 'date || credit || debit || balance'
    }

    print(transactions) {
        for (let i = 0; i < transactions.length; i++) {
            this._statement += `\n${transactions[i].join(' || ').replace('  ', ' ')}` // had to replace double space with single as null had 2 spaces
        }
        return this._statement
    }
}