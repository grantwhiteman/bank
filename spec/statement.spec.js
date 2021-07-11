const Statement = require('../src/statement.js')

let statement = new Statement()

describe('statement', () => {
    it('prints statement with hardcoded transaction data', () => {
        statement = new Statement()
        let expectedOutput = 'date || credit || debit || balance\n14/01/2012 || 500.00 || || 500.00'
        expect(statement.print([['14/01/2012', '500.00', null, '500.00']])).toEqual(expectedOutput)
    })
})