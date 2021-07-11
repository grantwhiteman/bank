# Grant Whiteman - Bank Challenge

To access the code - go to https://www.github.com/grantwhiteman/bank-challenge

To run the code go to the root directory and run npm install to install dependencies, then npx jasmine to run the specs.
```
$ git clone git@github.com:grantwhiteman/bank-challenge.git
```
```
$ npm install
```
```
$ npx jasmine
```


## Method:

I followed this framework set out below:



```
# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
```

#### Standard
- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is linted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class
```
Then I started by producing this domain model https://youtu.be/khl9VhY_wGI:

|Object|Properties|Messages|Context|Output|
|---|---|---|---|---|
|Transaction data|type @ string||||
||amount @ number||||
||date @string||||
|Transactions|type @string|Deposit(amount @number, date @string)|Deposit account with amount and date ,stored in transaction Obj|Transaction data @obj|
||amount @number|withdraw(amount @number, date @string)|withdraw account with amount and date ,stored in transaction Obj|Transaction data @obj|
||date @string||||
|Statement|type @string|print()|Prints formatted transaction data|Statement @string|
||amount @number|format()|Formats transaction data|Transaction data @string|
||date @string||||
||Transaction data @Obj||||

- Then I wrote my feature test, then my first unit test https://youtu.be/SjTVDDZNK0M.
- I made a class an account class to do everything, except get date which just had it's own function in getDate.js
- RGR cycled until code was completed in one class
- Refactored code to be more encapsulated
- added more test for individual classes and changed tests to suit new refactored code


## Review:
- Didn't really know hot to store the data, an array feels pretty gross, and the transaction class kind of seems a bit pointless, maybe the transaction class should store the transactions too?
- Didn't completely stick to the domain model but it was a good starting point
- Refactoring code went well, used another object as part of constructor -- actually think this was wrong and I should have avoided this -- i will make sure to ask about this!!
- Used ESLINT For the first time and managed to sort out all the errors!
- Would have likes to use spies but don't understand them very well
- Completely did the minimal work to just meet the requirements
- The account class was actually pretty clean byu the end of it, perhaps more should have been moved to the transaction class
- Was good to see encapsulation and loose coupling working in an actual project
- From the videos it looks like my typing speed does hinder my coding, it would be good to work on not looking at the keyboard when coding

## TODO:
- Work on not looking at the keyboard when coding
- Learn how to use spies
- Check if using another class in the constructor is a good idea or not 