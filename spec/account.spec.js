describe('account', function() {
    const Account = require('../src/Account.js')

    it('deposit adds deposit to account', function() {
        let account = new Account
        let expectedOutput = ['deposit', 500, '10-04-2015']
        account.deposit(500, '10-04-2015')
        expect(account._transactions[0]).toEqual(expectedOutput)
    })
})