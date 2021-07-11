const Transaction = require('../src/transaction.js')

let transaction = new Transaction()

describe('account', () => {
    beforeEach(() => {
        transaction = new Transaction()
    })

    it('returns formatted deposit', () => {
        let expectedOutput = ['10-04-2015', '500.00', null, '1000.00']
        expect(transaction.deposit(500.00, '10-04-2015', 1000.00)).toEqual(expectedOutput)
    })

    it('returns formatted withdrawal', () => {
        let expectedOutput = ['10-04-2015', null, '500.00', '1000.00']
        expect(transaction.withdraw(500.00, '10-04-2015', 1000.00)).toEqual(expectedOutput)
    })
})