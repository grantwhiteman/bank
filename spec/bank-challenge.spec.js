const Account = require('../src/Account.js')

describe('Bank-challenge', function() {
    it('prints statement after adding deposits/withdrawals', function() {
        let account = new Account()
        let expectedOutput = ('date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00')
        account.deposit(1000.00, '10-01-2012')
        account.deposit(2000.00, '13-01-2012')
        account.withdraw(500.00, '14-01-2012')
        expect(account.printStatement()).toEqual(expectedOutput)
    })
})