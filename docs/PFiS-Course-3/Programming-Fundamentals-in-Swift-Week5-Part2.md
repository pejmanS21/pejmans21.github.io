# Part 2: Define the bank account operations

In this exercise, you will practice working with functions and conditional statements to implement the bank account operations for the account you created. You will use these operations when you manage the account in the last exercise of the project.

Bank account users can withdraw money from or deposit money in their accounts. You will use functions and conditional statements to handle the different bank account operations logic.

After completing the exercise, your console output the log below:

```
Debit balance: $0
Debit deposit: $100. Debit balance: $100
Debit withdraw: $20. Debit balance: $80
Insufficient funds to withdraw $81. Debit balance: $80
Available credit: $100
Insufficient credit to withdraw $101. Available credit: $100
Credit withdraw: $100. Available credit: $0
Credit deposit: $50. Available credit: $50
Credit deposit: $50. Available credit: $100
Paid off credit balance.
Credit deposit: $100. Available credit: $200
Overpaid credit balance.
```

## **Instructions**

Create a new playground in Xcode to complete this exercise. Once you have created a new playground, follow the steps below.

### **Tips and resources**

- Use functions to create the bank account operations. _Refer to the_ [_Introductions to functions_](https://www.coursera.org/learn/programming-fundamentals-swift/lecture/vkkTo/introduction-to-functions) _video in module 3 to refresh your memory on working with functions._
- Use conditional statements to implement the logic of account withdrawals and deposits. _Refer to the_ [_If, if/else and else/if statements_](https://www.coursera.org/learn/programming-fundamentals-swift/lecture/0OpzK/if-if-else-and-else-if-statements) _video in module 1 to refresh your memory on working with conditional statements._

### **Step 1: Define the bank account structure**

Define a structure called BankAccount. You will use the structure to encapsulate the different banking operations.

### **Step 2: Create debit and credit bank balance properties**

#### _Creating stored properties_

Create a debitBalance variable stored property with a 0 default value.This variable is the starting debit balance. You will use the debit banking operations on this account balance.

Create a creditBalance variable stored property with a 0 default value. This variable is the starting credit balance.

Create a creditLimit constant stored property and assign 100 to it.You will use the credit banking operations on these properties.

#### _Creating computed properties_

Create a debitBalanceInfo computed property of type String that returns “Debit balance: $” followed by debitBalance. You will use this computed property when working with debit banking operations.

Create an availableCredit computed property of type Int that returns the sum of creditLimit and creditBalance. This computed property calculates the bank account user’s credit spending power.

Next, create a creditBalanceInfo computed property of type String that returns **“Available credit: $”** followed by availableCredit. You will use this computed properties when working with credit banking operations.

### **Step 3: Implement the deposit operation for debit and credit bank accounts**

Next, implement the methods that handle the deposit operation for debit and credit bank balances.

#### _Debit deposit_

Do the following to create the function's prototype:

1.  Declare a method called debitDeposit with an amount parameter of type integer.
2.  Omit the argument label of the amount parameter.

In the method body, add the following logic:

1.  Use the addition assignment operator to add the amount value to the balance variable and assign the result to the balance variable.
2.  In the if statement body, print **"Deposited $"** followed by amount, ., and debitBalanceInfo using string interpolation.

You've completed the debit deposit operation for debit bank balances.

#### _Credit deposit_

Do the following to create the function's prototype:

1.  Declare a method called creditDeposit with an amount parameter of type integer.
2.  Omit the argument label of the amount parameter.

In the method body, add the following logic:

1.  Use the addition assignment operator to add the amount value to the balance variable and assign the result to the balance variable.
2.  In the if statement body, print **"Credit $"** followed by amount, ., and creditBalanceInfo using string interpolation.
3.  Add an if statement to check if the creditBalance value equals 0.
4.  In the if statement body, print **"Paid off credit balance."**.
5.  Add an else if clause to the if statement.
6.  In the else if statement body, print **"Overpaid credit balance."**.

You've completed the credit deposit operation for credit bank balances.

### **Step 4: Implement the withdrawal operation for debit and credit bank accounts**

Next, you will implement the methods to handle the withdrawal operation of debit and credit bank balances.

#### _Debit withdraw_

Do the following to create the function's prototype:

1.  Declare a method called debitWithdraw with an amount parameter of type integer.
2.  Omit the argument label of the amount parameter.

In the method body, add the following logic:

1.  Add an if statement to check if the amount value is greater than the debitBalance value.
2.  In the if statement body, print **"Insufficient fund to withdraw $"** followed by amount, ., and debitBlanceInfo using string interpolation.
3.  Add an else clause to the if statement.
4.  In the else statement body, use the subtraction assignment operator to subtract amount value from the debit balance variable.
5.  Print the **"Debit withdraw: $"** followed by amount, . and debitBalanceInfo using string interpolation.

You've completed the withdrawal operation for the debit balance.

#### _Credit withdraw_

Do the following to create the function's prototype:

1.  Declare a method called creditWithdraw with an amount parameter of type integer.
2.  Omit the argument label of the amount parameter.

In the function body, add the following logic:

1.  Add an if statement to check if the amount value is greater than the availableCredit value.
2.  In the if statement body, print **"Insufficient credit to withdraw $"** followed by amount, ., and creditBalanceInfo using string interpolation.
3.  Add an else clause to the if statement.
4.  In the else statement body, use the subtraction assignment operator to subtract amount value from the credit balance variable.
5.  Print the **"Credit withdraw: $"** followed by amount, . and creditBalanceInfo using string interpolation.

You've completed the withdrawal operation for the credit balance.

### **Step 5: Create a bank account instance**

Create a bank account instance and assign it to a bankAccount variable at the bottom of the playground.

### **Step 6: Test the debit banking operations**

To check on the current debit balance, print debitBalanceInfo.

The console log should output:

```
Debit balance: $0
```

The current debit balance is $0.

#### _Deposit_

Now, test the method that handles the deposit operation for debit bank accounts.

Call debitDeposit(\_:) and pass 100 as the argument for the amount parameter. The console log should output:

```
Debit deposit: $100. Debit balance: $100
```

You have withdrew $20 from your bank account’s debit balance.

Call debitWithdraw(\_:) and pass 81 as the argument for the amount parameter. The console log should output:

```
Debit withdraw: $20. Debit balance: $80
```

You have withdrew $20 from your bank account’s debit balance.

Call debitWithdraw(\_:) and pass 81 as the argument for the amount parameter. The console log should output:

```
Insufficient funds to withdraw $81. Debit balance: $80
```

After each debit withdrawal, the method outputs insufficient funds if the balance is below the withdrawal amount.

### **Step 7: Test the credit banking operations**

Now test the methods that handle the withdrawal and deposit operations for credit bank accounts. Because there is a credit line in the credit bank account, you can withdraw money from the bank account before making a deposit.

To check on the current credit balance, print creditBalanceInfo. The console log should output:

```
Available credit: $100
```

The current available credit is $100.

#### _Withdraw_

Unlike a debit bank account, a credit bank account allows you to withdraw up to the available credit on the account. Now, test the method that handles the withdraw operation for credit bank accounts.

Call creditWithdraw(\_:) and pass 101 as the argument for the amount parameter. The console log should output:

```
Insufficient credit to withdraw $101. Available credit: $100
```

Because $101 exceeds the available credit on the balance, the method outputs insufficient credit for the withdrawal.

Call creditWithdraw(\_:) and pass 100 as the argument for the amount parameter. The console log should output:

```
Credit withdraw: $100. Available credit: $0
```

After each credit withdraw operation, the console log outputs the withdraw amount and the latest available credit status.

#### _Deposit_

Now, test the method that handles the deposit operation for credit bank accounts.

Call creditDeposit(\_:) and pass 50 as the argument for the amount parameter. The console log should output:

```
Credit deposit: $50. Available credit: $50
```

You have deposited $50 to your bank account’s debit balance.

Again, call creditDeposit(\_:) and pass 50 as the argument for the amount parameter. The console log should output:

```

Credit deposit: $50. Available credit: $100
Paid off credit balance.
```

The credit deposit operation will inform the user if they have paid off the account balance.

Again, call creditDeposit(\_:) and pass 50 as the argument for the amount parameter. The console log should output:

```
Credit deposit: $100. Available credit: $200
Overpaid credit balance.
```

The credit deposit operation will inform the user if they have overpaid the credit account balance.

## **Concluding thoughts**

In this exercise, you worked with functions and conditional statements to create a bank account’s operations. You will use these operations to manage the bank account in the final exercise of the project.

```swift hl_lines="45"
struct BankAccount {
    var debitBalance = 0
    var creditBalance = 0
    let creditLimit = 100
    var debitBalanceInfo: String {
        "Debit balance: $\(debitBalance)"
    }
    var availableCredit: Int {
        creditLimit + creditBalance
    }
    var creditBalanceInfo: String {
        "Available credit: $\(availableCredit)"
    }
    mutating func debitDeposit(_ amount: Int) {
        debitBalance += amount
        print("Debit deposit: $\(amount). \(debitBalanceInfo)")
    }
    mutating func debitWithdraw(_ amount: Int) {
        if amount > debitBalance {
            print("Insufficient funds to withdraw $\(amount). \(debitBalanceInfo)")
        } else {
            debitBalance -= amount
            print("Debit withdraw: $\(amount). \(debitBalanceInfo)")
        }
    }
    mutating func creditDeposit(_ amount: Int) {
        creditBalance += amount
        print("Credit deposit: $\(amount). \(creditBalanceInfo)")
        if creditBalance == 0 {
            print("Paid off credit balance.")
        } else if creditBalance > 0 {
            print("Overpaid credit balance.")
        }
    }
    mutating func creditWithdraw(_ amount: Int) {
        if amount > availableCredit {
            print("Insufficient credit to withdraw $\(amount). \(creditBalanceInfo)")
        } else {
            creditBalance -= amount
            print("Credit withdraw: $\(amount). \(creditBalanceInfo)")
        }
    }
}

var bankAccount = BankAccount()
print(bankAccount.debitBalanceInfo)
bankAccount.debitDeposit(100)
bankAccount.debitWithdraw(20)
bankAccount.debitWithdraw(81)
print(bankAccount.creditBalanceInfo)
bankAccount.creditWithdraw(101)
bankAccount.creditWithdraw(100)
bankAccount.creditDeposit(50)
bankAccount.creditDeposit(50)
bankAccount.creditDeposit(100)
```
