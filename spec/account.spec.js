describe('account', function() {
    const Account = require('../src/account.js')
    const getDate = require('../src/getDate.js')
    const Transaction  = require('../src/transaction.js')

    beforeEach(function() {
        account = new Account()
    })

    it('deposit adds deposit to account', function() {
        let expectedOutput = ['10-04-2015', '500.00', null, '500.00']
        account.deposit(new Transaction(), 500.00, '10-04-2015')
        expect(account._transactions[0]).toEqual(expectedOutput)
    })

    it('deposit adds deposit to account, without date input', function() {
        let expectedOutput = [getDate(), '500.00', null, '500.00']
        account.deposit(new Transaction(), 500.00)
        expect(account._transactions[0]).toEqual(expectedOutput)
    })

    it('withdraw adds withrawal to account', function() {
        let expectedOutput = ['10-04-2015', null, '500.00', '-500.00']
        account.withdraw(new Transaction(), 500.00, '10-04-2015')
        expect(account._transactions[0]).toEqual(expectedOutput)
    })

    it('withdraw adds withdrawal to account, without date input', function() {
        let expectedOutput = [getDate(), null, '500.00', '-500.00']
        account.withdraw(new Transaction(), 500.00)
        expect(account._transactions[0]).toEqual(expectedOutput)
    })

    it('outputs empty statement', function() {
        let expectedOutput = 'date || credit || debit || balance'
        expect(account.printStatement()).toEqual(expectedOutput)
    })

})