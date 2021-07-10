describe('account', function() {
    const Account = require('../src/Account.js')
    const getDate = require('../src/getDate.js')

    it('deposit adds deposit to account', function() {
        let account = new Account
        let expectedOutput = ['10-04-2015', '500.00', null, '500.00']
        account.deposit(500.00, '10-04-2015')
        expect(account._transactions[0]).toEqual(expectedOutput)
    })
    it('deposit adds deposit to account, without date input', function() {
        let account = new Account
        let expectedOutput = [getDate(), '500.00', null, '500.00']
        account.deposit(500.00)
        expect(account._transactions[0]).toEqual(expectedOutput)
    })
    it('withdraw adds withrawal to account', function() {
        let account = new Account
        let expectedOutput = ['10-04-2015', null, '500.00', '-500.00']
        account.withdraw(500.00, '10-04-2015')
        expect(account._transactions[0]).toEqual(expectedOutput)
    })
    it('withdraw adds withdrawal to account, without date input', function() {
        let account = new Account
        let expectedOutput = [getDate(), null, '500.00', '-500.00']
        account.withdraw(500.00)
        expect(account._transactions[0]).toEqual(expectedOutput)
    })
})