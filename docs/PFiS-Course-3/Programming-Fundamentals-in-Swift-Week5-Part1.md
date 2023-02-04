# Part 1: Create the banking system

In this exercise, you will practice working with loops and switch statements to create a bank account. You will configure the account to be a debit or credit account. To achieve this, you will use loops and switch statements to process user input from the console and implement the bank account’s creation logic.

After completing this exercise, your output to the console should resemble the following:

```
Welcome to your virtual bank system.
What kind of account would you like to open?
1. Debit account
2. Credit account
The selected option is 1.
You have opened a debit account.
```

???+ Note
    The exercise generates random numbers for user input. Your output might be slightly different than the above.

## **Instructions**

Create a new playground in Xcode to complete this exercise. Refer to the “[How to complete exercises](https://www.coursera.org/learn/programming-fundamentals-swift/supplement/IH0Fd/how-to-complete-exercises)” reading to refresh your memory on creating and launching a new playground in Xcode.

Once you have created a new playground, follow the steps below to create your very own bank account.

### **Tips**

- Use repeat while loops to create the bank account based on the user’s choice. _Refer to the_ [_Examples of loops in Swift_](https://www.coursera.org/learn/programming-fundamentals-swift/supplement/oMBoC/examples-of-loops-in-swift) _reading._
- Use switch statements to select the right bank account type from the list of bank account types provided by the virtual bank system interface. _Refer to the_[_Switch statements_](https://www.coursera.org/learn/programming-fundamentals-swift/supplement/J7wxT/switch-statements) _reading._

### **Step 1: Start the virtual bank system interface**

First, power on the virtual bank system interface that will guide users through the bank account setup process.

To achieve this, create a class with a method to greet the customer and another to onboard the customer on account opening. Use print statements to display the following on the interface:

_**Welcome to your virtual bank system.**_

_**What kind of account would you like to open?**_

_**1. Debit account**_

_**2. Credit account**_

**Note:** Use 1 print statement to print the welcome message in one method. Use 3 print statements in another method to ask the customer and display the different account options.

Instantiate a virtual bank system constant. Then, welcome the customer with the welcome customer method. You will simulate the user input later.

### **Step 2: Create a property for the bank account type**

Next, create a mutable property to store the bank account type. Call it accountType and set its value to "" (empty string).

### **Step 3: Create the bank account type based on user input**

To take the user input to make a bank account, create a method with numberPadKey of type Int in the parameter. Inside the method body, add a print statement that prints “The selected option is...”. Use string interpolation to access the value of the numberPadKey variable inside the print statement.

#### _Defining the account type based on user input_

Next, you will declare a switch statement inside the repeat while loop. The switch statement selects the bank account from the options provided by the interface using the value of the numberPadKey parameter. This changes the value of the accountType variable based on the generated random number. This means that a valid bank account will be created if the user’s input is valid.

**Tip**: Refer to the [Switch statements](https://www.coursera.org/learn/programming-fundamentals-swift/supplement/J7wxT/switch-statements) reading to refresh your memory on using switch statements.

1.  Assign "debit" to the accountType variable in the first switch case inside the switch statement of the loop. This means that a debit account is created if the generated user input is 1.
2.  Assign "credit" to the accountType variable in the second switch case inside the switch statement of the loop. This means that a credit account is created if the generated user input is 2.
3.  Finally, add a default case to the switch statement inside the loop to make it exhaustive. The default case handles all values of the input variable that other switch cases don’t handle. Add a print statement that prints "Invalid input:" followed by the numberPadKey. This means that no bank account is created because the user’s input is invalid.

#### _Display account type_

Finally, print the type of bank account that has been created. Your print statement may read:

"You have opened a ... account."

Use string interpolation to access the value of the accountType variable inside the print statement.

### **Step 4: Welcoming customer with a virtual bank system instance**

Now, you will bring your virtual bank system into existence and have the system greet your customer.

Create a virtual bank system class instance. Call the welcome customer method.

### **Step 5: Generating user input in the repeat while loop**

You will start by defining a repeat while loop that generates user input using random numbers. If the numbers generated are either 1 or 2, the bank account will be created. The loop should repeat itself as long as the accountType variable’s value is equal to an **empty string**. If the generated user input is valid the first time the loop runs, the loop will conclude. If the generated input is invalid, the loop will repeat until the generated user input is valid.

Don't worry if this sounds complicated, the steps below will guide you through the process.

!!! Example ""
    Refer to the [Examples of loops in Swift](https://www.coursera.org/learn/programming-fundamentals-swift/supplement/oMBoC/examples-of-loops-in-swift) reading in module 1 to refresh your memory on using repeat while loops and the random(in:) method.

Inside the repeat while loop:

1.  Providing the user with account opening instructions. Call the onboard customer account opening method.
2.  Next, use the random(in:) method to generate a random number between 1 and 5 to simulate the user input. The random(in:) method uses a closed range of integers that defines the lower and upper bounds of the generated random numbers. Assign the generated random number to the numberPadKey constant.

!!! Note ""
    You are generating between 1 and 3 so that the range accommodates invalid cases.

1.  Call the make account method and pass the randomly generated user input into the numberPadKey parameter.

## **Concluding thoughts**

In this exercise, you worked with loops and switch statements to create your banking system and process user input from the console. You will define the bank account’s operations in the next exercise.

```swift hl_lines="25"
class VirtualBankSystem {
    var accountType = ""
    func welcomeCustomer() {
        print("Welcome to your virtual bank system.")
    }
    func onboardCustomerAccountOpening() {
        print("What kind of account would you like to open?")
        print("1. Debit account")
        print("2. Credit account")
    }
    func makeAccount(numberPadKey: Int) {
        print("The selected option is \(numberPadKey).")
        switch numberPadKey {
        case 1:
            accountType = "debit"
        case 2:
            accountType = "credit"
        default:
            print("Invalid input: \(numberPadKey)")
            return
        }
        print("You have opened a \(accountType) account.")
    }
}
let virtualBankSystem = VirtualBankSystem()
virtualBankSystem.welcomeCustomer()
repeat {
    virtualBankSystem.onboardCustomerAccountOpening()
    let numberPadKey = Int.random(in: 1...3)
    virtualBankSystem.makeAccount(numberPadKey: numberPadKey)
} while virtualBankSystem.accountType == ""
```
